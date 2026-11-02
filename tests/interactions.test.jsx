import { test } from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { act, create } from 'react-test-renderer';
import { WorkflowPreview, examples } from '../src/components/WorkflowPreview.tsx';
import { PilotPlanner } from '../src/components/PilotPlanner.tsx';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

test('workflow buttons select each disclosed example and maintain pressed state', async () => {
  let renderer;
  await act(async () => { renderer = create(<WorkflowPreview />); });
  const buttons = renderer.root.findAllByType('button');
  for (let index = 0; index < examples.length; index++) {
    await act(async () => { buttons[index].props.onClick(); });
    assert.equal(renderer.root.findByType('h3').children.join(''), examples[index].question);
    assert.deepEqual(buttons.map(button => button.props['aria-pressed']), examples.map((_, i) => i === index));
    assert.equal(renderer.root.findByProps({ id: 'workflow-example' }).props['aria-live'], 'polite');
  }
  await act(async () => renderer.unmount());
});

test('pilot brief updates, copies, clears stale feedback and handles denied clipboard', async () => {
  let renderer;
  let copied = '';
  const original = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { clipboard: { writeText: async text => { copied = text; } } } });
  try {
    await act(async () => { renderer = create(<PilotPlanner />); });
    const selects = renderer.root.findAllByType('select');
    await act(async () => selects[0].props.onChange({ target: { value: 'Shift handoffs' } }));
    await act(async () => selects[1].props.onChange({ target: { value: 'Clearer ownership at handoff' } }));
    const brief = renderer.root.findByType('textarea');
    assert.match(brief.props.value, /Workflow: Shift handoffs/);
    assert.match(brief.props.value, /Desired outcome: Clearer ownership at handoff/);
    assert.equal(brief.props.readOnly, true);
    await act(async () => renderer.root.findByType('button').props.onClick());
    assert.equal(copied, brief.props.value);
    assert.match(renderer.root.findByProps({ role: 'status' }).children.join(''), /Brief copied/);
    await act(async () => selects[0].props.onChange({ target: { value: 'Manager coaching and training' } }));
    assert.equal(renderer.root.findByProps({ role: 'status' }).children.join(''), '');
    navigator.clipboard.writeText = async () => { throw new Error('Denied'); };
    await act(async () => renderer.root.findByType('button').props.onClick());
    assert.match(renderer.root.findByProps({ role: 'status' }).children.join(''), /Select and copy/);
  } finally {
    if (renderer) await act(async () => renderer.unmount());
    if (original) Object.defineProperty(globalThis, 'navigator', original);
    else delete globalThis.navigator;
  }
});
