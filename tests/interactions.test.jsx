import { test } from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { act, create } from 'react-test-renderer';
import { WorkflowPreview, examples } from '../src/components/WorkflowPreview.tsx';

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

test('changing workflow remounts video, resets play state, and reapplies motion preference', async () => {
 const { DemoPlayer } = await import('../src/components/DemoPlayer.tsx');
 const original = globalThis.window;
 const listeners = new Set();
 let reduced = false;
 globalThis.window = { matchMedia: () => ({ get matches() { return reduced; }, addEventListener: (_, f) => listeners.add(f), removeEventListener: (_, f) => listeners.delete(f) }) };
 let renderer;
 let mounts = 0;
 const media = [];
 try {
  await act(async () => { renderer = create(<DemoPlayer slug="schedule" title="Schedule" />, { createNodeMock: node => { if (node.type !== 'video') return null; mounts++; const mock = { pauseCalls: 0, playCalls: 0, pause() { this.pauseCalls++; }, play() { this.playCalls++; return Promise.resolve(); } }; media.push(mock); return mock; } }); });
  await act(async () => renderer.root.findByType('video').props.onPlay());
  assert.equal(renderer.root.findByType('button').children.join(''), 'Pause demo');
  const initialMounts = mounts;
  await act(async () => renderer.update(<DemoPlayer slug="payroll" title="Payroll" />));
  assert.ok(mounts > initialMounts);
  assert.equal(renderer.root.findByType('source').props.src, '/demos/payroll.mp4');
  assert.equal(renderer.root.findByType('video').props.poster, '/demos/payroll.png');
  assert.equal(renderer.root.findByType('button').children.join(''), 'Play demo');
  assert.equal(listeners.size, 1);
  reduced = true;
  await act(async () => renderer.update(<DemoPlayer slug="cash" title="Cash" autoPlay />));
  assert.equal(media.at(-1).pauseCalls, 1);
  assert.equal(media.at(-1).playCalls, 0);
  reduced = false;
  await act(async () => { for (const listener of listeners) listener(); });
  assert.equal(media.at(-1).playCalls, 1);
 } finally {
  if (renderer) await act(async () => renderer.unmount());
  assert.equal(listeners.size, 0);
  if (original === undefined) delete globalThis.window; else globalThis.window = original;
 }
});
