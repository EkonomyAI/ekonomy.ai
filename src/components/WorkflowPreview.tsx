import { useState } from 'react';

export const examples = [
  { name: 'Opening the shift', question: 'What should a new shift lead check first?', guidance: 'Start with your opening checklist. Confirm station readiness, review staffing, and flag anything that needs the manager’s decision before service.', reference: 'Example reference: opening checklist', next: 'Agree on the one priority to share at the pre-shift meeting.' },
  { name: 'Coaching a teammate', question: 'How do I explain our service standard?', guidance: 'Use one concrete example from your house playbook. Walk through the expected behavior, practice it together, and check understanding before the rush.', reference: 'Example reference: house service playbook', next: 'Let the teammate explain the standard back in their own words.' },
  { name: 'Closing the loop', question: 'What belongs in the next shift’s handoff?', guidance: 'Separate what happened from what still needs attention. Record the unresolved item, the person responsible, and when the next manager should follow up.', reference: 'Example reference: shift handoff template', next: 'Confirm that the incoming manager has the context to act.' },
];

export function WorkflowPreview() {
  const [selected, setSelected] = useState(0);
  const example = examples[selected];
  return <section className="walkthrough section" id="walkthrough" aria-labelledby="walkthrough-title">
    <div className="container">
      <div className="walkthroughHeading"><div><p className="eyebrow">From repeated question to shared practice</p><h2 id="walkthrough-title">Put the know-how<br />where the work happens.</h2></div><p className="sectionLede">Explore three moments in a restaurant’s day, from the first question to a clear next step.</p></div>
      <div className="workflowChoices" role="group" aria-label="Choose a workflow">{examples.map((item, index) => <button key={item.name} type="button" aria-pressed={selected === index} aria-controls="workflow-example" onClick={() => setSelected(index)}><span aria-hidden="true">0{index + 1}</span>{item.name}</button>)}</div>
      <div className="workflowExample" id="workflow-example" aria-live="polite" aria-atomic="true">
        <div className="workflowQuestion"><span className="sampleTag">Daily operations</span><p className="eyebrow">A manager asks</p><h3>{example.question}</h3><p>Your restaurant’s standards would be the starting point—not a one-size-fits-all answer.</p></div>
        <div className="workflowAnswer"><p className="eyebrow">A clearer starting point</p><p className="exampleGuidance">{example.guidance}</p><p className="exampleReference">{example.reference}</p><div className="exampleNext"><strong>Keep the human in the loop</strong><p>{example.next}</p></div></div>
      </div>
      <p className="workflowDisclaimer">Examples use fictional standards. Managers remain responsible for decisions; follow your approved policies for safety, allergens, and compliance.</p>
    </div>
  </section>;
}
