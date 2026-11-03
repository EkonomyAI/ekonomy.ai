import type { Workflow } from '../data/workflows';

/** The same deterministic scene is used on the page and for exported frames. */
export function Conversation({ workflow, frame = 4 }: { workflow: Workflow; frame?: number }) {
  return <div className="conversation">
    <div className="conversationTop"><strong>ProvisionOS</strong><span>Harbor & Pine Café</span></div>
    <div className="fictionLabel">Illustrative workflow · fictional data</div>
    <div className="conversationBody"><aside aria-hidden="true">WORKSPACE<br /><br /># daily-ops<br /># people<br /># finance</aside><div className="messages">
      <div className="channelTitle"># {workflow.shortTitle.toLowerCase()} <span>· workflow preview</span></div>
      {workflow.messages.slice(0, frame + 1).map((m, i) => <div className={`message ${i === 3 ? 'reply' : ''}`} key={i}><span className={`avatar ${m.speaker === 'Oiko' ? 'oikoAvatar' : ''}`} aria-hidden="true">{m.speaker === 'Oiko' ? 'O' : 'GM'}</span><div><strong>{m.speaker}</strong> <small>9:{String(i + 10).padStart(2, '0')}</small><p>{m.text}</p></div></div>)}
      {frame >= 4 && <div className="outputCard"><span className="outputStatus">{workflow.artifact.status}</span><strong>{workflow.artifact.title}</strong>{workflow.artifact.lines.map(l => <p key={l}>{l}</p>)}</div>}
      {frame < 4 && <div className="typing" aria-hidden="true">••• Next: {workflow.messages[frame + 1]?.speaker}</div>}
    </div></div><div className="composer" aria-hidden="true">Message # daily-ops <span>Illustration only · not connected</span></div>
  </div>;
}
