import {test} from 'node:test';
import assert from 'node:assert/strict';
import {workflows} from '../src/data/workflows.ts';
import {renderToStaticMarkup} from 'react-dom/server';
import React from 'react';
import {Conversation} from '../src/components/Conversation.tsx';
test('nine distinct workflows with bounded fictional scenes and substantive page data',()=>{
 assert.equal(workflows.length,9);assert.equal(new Set(workflows.map(w=>w.slug)).size,9);
 for(const w of workflows){assert.equal(w.messages.length,5);assert.ok(w.faq.length>=2);assert.ok(w.inputs.length>=2);assert.ok(w.steps.length>=3);assert.ok(w.availability.length>30);for(let frame=0;frame<5;frame++){const html=renderToStaticMarkup(React.createElement(Conversation,{workflow:w,frame}));assert.ok(html.includes('Illustrative workflow · fictional data'));assert.equal((html.match(/class="message /g)||[]).length,frame+1);}}
});
test('cash difference remains open and no payroll submission is depicted',()=>{
 const cash=workflows.find(w=>w.slug==='cash-deposit-reconciliation');const text=JSON.stringify(cash);assert.match(text,/1,240/);assert.match(text,/1,200/);assert.match(text,/40/);assert.match(cash.artifact.status,/open/i);
 const payroll=workflows.find(w=>w.slug==='payroll-preparation');assert.match(payroll.limitations,/submi|finali/i);
});
