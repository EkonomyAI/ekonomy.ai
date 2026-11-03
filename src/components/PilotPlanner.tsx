import { useState } from 'react';

const workflows = ['Opening and closing routines', 'Manager coaching and training', 'Shift handoffs'];
const outcomes = ['Fewer repeated questions', 'More consistent execution', 'Clearer ownership at handoff'];

export function PilotPlanner() {
  const [workflow, setWorkflow] = useState(workflows[0]);
  const [outcome, setOutcome] = useState(outcomes[0]);
  const [status, setStatus] = useState('');
  const brief = `Ekonomy AI pilot discussion brief\n\nWorkflow: ${workflow}\nDesired outcome: ${outcome}\n\nStarting point: Pick one team and one existing operating standard.\nBefore starting: Agree on the baseline, review period, and a person responsible for feedback.\nReview together: Was the guidance useful, was it followed, and what still needed a manager’s judgment?\n\nDiscussion draft only. No pilot has been requested or booked.`;
  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setStatus('Brief copied. Save it for a future pilot conversation.');
    } catch {
      setStatus('Copy is unavailable here. Select and copy the brief below.');
    }
  }
  return <div className="pilotPlanner">
    <div className="plannerHeading"><h3>Start with one workflow.</h3><p>Build a short discussion brief to keep. No signup, no submission, and nothing saved by this page.</p></div>
    <div className="plannerFields"><label htmlFor="pilot-workflow">Where would you start?<select id="pilot-workflow" value={workflow} onChange={event => { setWorkflow(event.target.value); setStatus(''); }}>{workflows.map(value => <option key={value}>{value}</option>)}</select></label><label htmlFor="pilot-outcome">What would useful look like?<select id="pilot-outcome" value={outcome} onChange={event => { setOutcome(event.target.value); setStatus(''); }}>{outcomes.map(value => <option key={value}>{value}</option>)}</select></label></div>
    <label className="briefLabel" htmlFor="pilot-brief">Your discussion brief</label><textarea id="pilot-brief" readOnly value={brief} rows={10} spellCheck={false} />
    <div className="plannerActions"><button className="button buttonDark" type="button" onClick={copyBrief}>Copy your brief <span aria-hidden="true">↗</span></button><span>No information is sent.</span></div>
    <p className="copyStatus" role="status">{status}</p>
  </div>;
}
