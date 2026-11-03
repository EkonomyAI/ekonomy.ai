import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { DemoPlayer } from '@/components/DemoPlayer';
import { workflows } from '@/data/workflows';
import { PilotPlanner } from '@/components/PilotPlanner';
import { site } from '@/config/site';

const capabilities = [
  { number: '01', name: 'Capture the know-how.', text: 'Bring the standards, routines, and judgment that live in your head into a shared source of guidance.', tag: 'Operational memory' },
  { number: '02', name: 'Coach in the moment.', text: 'Give managers a clearer starting point for everyday questions, with your operating standards as the reference.', tag: 'Manager enablement' },
  { number: '03', name: 'Make every shift count.', text: 'Turn recurring questions and exceptions into opportunities to improve training, handoffs, and consistency.', tag: 'Continuous learning' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${site.name} | The work behind every shift.`}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content="Ekonomy AI — The work behind every shift." />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${site.url}/`} />
        <meta property="og:url" content={`${site.url}/`} />
        <meta property="og:site_name" content={site.name} />
        <meta name="twitter:card" content="summary" />
        <meta name="theme-color" content="#102A36" />
        <link rel="icon" type="image/svg+xml" href="/brand/ekonomyai-navy.svg" />
        <link rel="apple-touch-icon" href="/brand/ekonomyai-avatar-600.png" />
        <meta property="og:image" content={`${site.url}/brand/ekonomyai-avatar-600.png`} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Ekonomy AI — approved ivory E mark on midnight navy" />
        <meta name="twitter:image" content={`${site.url}/brand/ekonomyai-avatar-600.png`} />
        <meta name="twitter:image:alt" content="Ekonomy AI company mark" />
      </Head>
      <Link className="skipLink" href="#main">Skip to content</Link>
      <header className="hero" id="top">
        <nav className="nav container" aria-label="Primary">
          <Link className="brand" href="#top" aria-label="Ekonomy AI home"><Image className="brandMark" src="/brand/ekonomyai-reverse.svg" width={52} height={52} alt="" priority />ekonomy<span className="brandSuffix">ai</span></Link>
          <div className="navLinks"><Link href="#product">Ekonomy AI</Link><Link href="/workflows/">Workflows</Link><Link href="#approach">Our approach</Link></div>
          <Link className="navCta" href="#pilot">Explore a pilot <span aria-hidden="true">↗</span></Link>
        </nav>
        <div className="heroGrid container">
          <div className="heroCopy">
            <p className="eyebrow light">Built around the people who run restaurants</p>
            <h1>The work behind every shift.<br /><span>Finally connected.</span></h1>
            <p className="lede">Scheduling, payroll preparation, cash reconciliation, and staff know-how. Explore reviewable workflows with Ekonomy AI.</p>
            <Link className="button buttonLight" href="/workflows/">See the workflows <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="shiftScene" aria-label="Shift briefing">
            <div className="sceneCaption"><span className="statusDot" /> THE SHIFT STARTS HERE</div>
            <div className="briefing">
              <div className="briefingTop"><span>Ekonomy AI</span><span className="sampleTag">Concept preview</span></div>
              <p className="briefingTitle">Good service starts<br />before the first order.</p>
              <div className="briefingRow"><span className="rowIcon" aria-hidden="true">↗</span><div><strong>Before the rush</strong><p>Review today’s priorities.</p></div><span className="rowNumber">01</span></div>
              <div className="briefingRow"><span className="rowIcon" aria-hidden="true">≋</span><div><strong>Your way of doing things</strong><p>Keep house standards close.</p></div><span className="rowNumber">02</span></div>
              <div className="briefingRow"><span className="rowIcon" aria-hidden="true">↺</span><div><strong>A better handoff</strong><p>Pass the learning to the next shift.</p></div><span className="rowNumber">03</span></div>
              <div className="briefingFoot">Your team. Your standards.</div>
            </div>
            <span className="sceneNote">A little less repetition. A little more room to lead.</span>
          </div>
        </div>
        <div className="heroBottom container"><span>Independent restaurants. Shared ambition.</span><Link href="#approach">Built for the everyday <span aria-hidden="true">↓</span></Link></div>
      </header>
      <main id="main">
        <section className="intro section container" id="product">
          <p className="eyebrow">Introducing Ekonomy AI</p>
          <div><h2>Your best operator can’t be<br className="desktopBreak" /> on every shift.</h2><p className="sectionLede">But their experience shouldn’t leave when they do. We’re building practical AI tools that help restaurant teams carry the owner’s know-how into the everyday.</p></div>
        </section>
        <section className="capabilitySection" aria-label="What we are building">
          <div className="capabilityGrid container">{capabilities.map((item) => <article className="capability" key={item.number}><div className="capabilityTop"><span>{item.number}</span><span aria-hidden="true">↗</span></div><p className="eyebrow">{item.tag}</p><h3>{item.name}</h3><p>{item.text}</p></article>)}</div>
        </section>
        <section className="homepageDemo container" id="walkthrough"><p className="eyebrow">Three requests. Three reviewable work products.</p><h2>Staff the week. Prepare payroll. Explain the difference.</h2><DemoPlayer slug="homepage" title="Scheduling, payroll preparation and cash reconciliation" autoPlay/><p>Explore each workflow below, from the first request to the finished draft.</p></section><section className="homepageWorkflows container"><h2>Start with the work you need done.</h2><div className="workflowCards">{workflows.map(w => <Link key={w.slug} href={`/solutions/${w.slug}/`}><h3>{w.shortTitle} ↗</h3><p>{w.description}</p></Link>)}</div></section>
        <section className="approach section container" id="approach">
          <div><p className="eyebrow">Operator first. Always.</p><h2>Start with the shift.<br /><span className="muted">Not the platform pitch.</span></h2></div>
          <div className="approachSteps"><article><span>01 / Listen</span><h3>Find the repeated question.</h3><p>Start with the training gaps, manager questions, and handoffs that keep pulling you back in.</p></article><article><span>02 / Focus</span><h3>Work on one real workflow.</h3><p>Choose a focused use case and agree on what a useful result would look like for your team.</p></article><article><span>03 / Learn</span><h3>Measure what changes.</h3><p>Look at adoption, consistency, and time spent on repeat questions before expanding the scope.</p></article></div>
        </section>
        <section className="pilot" id="pilot"><div className="container pilotInner"><p className="eyebrow">Let’s build around real work</p><h2>Better shifts.<br />More room to lead.</h2><p>Exploring a design-partner pilot? Start with one workflow your team wants to improve.</p><PilotPlanner /></div></section>
        <section className="faq section container" aria-labelledby="faq-title"><div><p className="eyebrow">A few practical questions</p><h2 id="faq-title">Before the first shift.</h2></div><div className="faqList">
          <details><summary>Which systems can we use?</summary><p>Start with the records your team already uses. We confirm supported formats and integrations when scoping your pilot.</p></details>
          <details><summary>Does Ekonomy AI replace a manager?</summary><p>No. The goal is to make your existing operating know-how easier to use. Your team remains responsible for decisions, coaching, and your approved safety procedures.</p></details>
          <details><summary>What would a pilot start with?</summary><p>One repeated question or routine, an existing standard, and a small team willing to give feedback. Agree on what to measure before broadening the scope.</p></details>
          <details><summary>Where does my discussion brief go?</summary><p>Nowhere unless you copy it yourself. The planner runs in this page, sends no information, and does not save your choices. It does not book or request a pilot.</p></details>
        </div></section>
      </main>
      <footer className="footer container"><Link className="brand footerBrand" href="#top" aria-label="Ekonomy AI home"><Image className="brandMark" src="/brand/ekonomyai-mono.svg" width={52} height={52} alt="" />ekonomy<span className="brandSuffix">ai</span></Link><p>Practical intelligence. Human experience.</p><span>© {new Date().getFullYear()} Ekonomy AI</span></footer>
    </>
  );
}
