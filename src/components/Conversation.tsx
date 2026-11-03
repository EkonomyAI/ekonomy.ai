import type { Workflow } from '../data/workflows';

/** Shared deterministic scene for page previews and exported media. */
export function Conversation({ workflow, frame = 4 }: { workflow: Workflow; frame?: number }) {
 const channel = workflow.shortTitle.toLowerCase().replaceAll(' ', '-');
 return <div className="conversation">
  <div className="conversationTop"><span className="windowDots" aria-hidden="true">● ● ●</span><span aria-hidden="true">← &nbsp; → &nbsp; ◷</span><div className="workspaceSearch">⌕ <span>Search Harbor & Pine</span></div><span aria-hidden="true">ⓘ</span></div>
  <div className="conversationBody">
   <aside aria-hidden="true"><div className="workspaceName">Harbor & Pine <span>⌄</span></div><div className="sidebarItems">☷ &nbsp; Threads<br/>▱ &nbsp; Drafts & sent<br/>♡ &nbsp; Saved for later</div><div className="sidebarSection">⌄ &nbsp; Channels <span>＋</span></div><div className="sidebarChannel"># &nbsp; general</div><div className="sidebarChannel selected"># &nbsp; {channel}</div><div className="sidebarChannel"># &nbsp; shift-handoff</div><div className="sidebarChannel"># &nbsp; team-updates</div><div className="sidebarSection">⌄ &nbsp; Direct messages</div><div className="sidebarChannel">● &nbsp; Oiko</div><div className="sidebarChannel">● &nbsp; Restaurant GM</div><div className="workspaceProduct">ProvisionOS <span>by Ekonomy AI</span></div></aside>
   <section className="chatPane" aria-label={workflow.shortTitle}>
    <div className="channelTitle"><span>☆ &nbsp; # {workflow.shortTitle.toLowerCase()}</span><span className="channelTools" aria-hidden="true">◉ &nbsp; ▣ &nbsp; ⋮</span></div>
    <div className="channelTabs"><strong>▤ Messages</strong><span>▧ Files</span><span>＋</span></div>
    <div className="messages"><div className="dayDivider"><span>Today ▾</span></div>
     {workflow.messages.slice(0, frame + 1).map((m,i)=><div className={`message ${m.speaker==='Oiko'?'fromOiko':'fromManager'}`} key={i}><span className={`avatar ${m.speaker==='Oiko'?'oikoAvatar':''}`} aria-hidden="true">{m.speaker==='Oiko'?'O':'GM'}</span><div className="messageContent"><div className="messageMeta"><strong>{m.speaker}</strong>{m.speaker==='Oiko'&&<span className="appBadge">APP</span>}<small>9:{String(10+i).padStart(2,'0')} AM</small></div><p>{m.text}</p>{i===2&&<div className="threadHint">↳ {frame>=3?'1 reply':'Reply in thread'}</div>}{i===4&&<div className="outputCard"><div className="attachmentTitle">▤ &nbsp; {workflow.artifact.title}</div><span className="outputStatus">{workflow.artifact.status}</span>{workflow.artifact.lines.map(l=><p key={l}>{l}</p>)}<div className="artifactActions"><span>Open draft ↗</span><span>View sources</span></div></div>}</div></div>)}
    </div>
    <div className="composerArea"><div className="composer" aria-hidden="true"><div className="formatTools">B &nbsp; <i>I</i> &nbsp; <s>S</s> &nbsp; │ &nbsp; ☷ &nbsp; ≡ &nbsp; ↗</div><div className="composerPlaceholder">Message #{channel}</div><div className="composeActions"><span>＋ &nbsp; ☺ &nbsp; @ &nbsp; │ &nbsp; ♧</span><span className="sendArrow">➤ &nbsp;⌄</span></div></div><div className="typing" aria-hidden="true">{frame<4?`${workflow.messages[frame+1]?.speaker} is typing…`:'Enter to send · Shift + Enter for a new line'}</div></div>
   </section>
  </div>
 </div>;
}
