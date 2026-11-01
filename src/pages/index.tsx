import Head from 'next/head';
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
        <title>{`${site.name} | Restaurant know-how. Ready for every shift.`}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content="Ekonomy AI — Restaurant know-how. Ready for every shift." />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#171e1b" />
      </Head>
      <a className="skipLink" href="#main">Skip to content</a>
      <header className="hero" id="top">
        <nav className="nav container" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Ekonomy AI home"><span className="brandMark" aria-hidden="true">e.</span>ekonomy<span className="brandSuffix">ai</span></a>
          <div className="navLinks"><a href="#product">ProvisionOS</a><a href="#approach">Our approach</a></div>
          <a className="navCta" href="#pilot">Explore a pilot <span aria-hidden="true">↗</span></a>
        </nav>
        <div className="heroGrid container">
          <div className="heroCopy">
            <p className="eyebrow light">Built around the people who run restaurants</p>
            <h1>Restaurant know-how.<br /><span>Ready for every shift.</span></h1>
            <p className="lede">Your standards. Your experience. A stronger starting point for every manager. Meet ProvisionOS, from Ekonomy AI.</p>
            <a className="button buttonLight" href="#product">Discover ProvisionOS <span aria-hidden="true">↗</span></a>
          </div>
          <div className="shiftScene" aria-label="Illustrative shift briefing, not a live product screen">
            <div className="sceneCaption"><span className="statusDot" /> THE SHIFT STARTS HERE</div>
            <div className="briefing">
              <div className="briefingTop"><span>ProvisionOS</span><span className="sampleTag">Concept preview</span></div>
              <p className="briefingTitle">Good service starts<br />before the first order.</p>
              <div className="briefingRow"><span className="rowIcon" aria-hidden="true">↗</span><div><strong>Before the rush</strong><p>Review today’s priorities.</p></div><span className="rowNumber">01</span></div>
              <div className="briefingRow"><span className="rowIcon" aria-hidden="true">≋</span><div><strong>Your way of doing things</strong><p>Keep house standards close.</p></div><span className="rowNumber">02</span></div>
              <div className="briefingRow"><span className="rowIcon" aria-hidden="true">↺</span><div><strong>A better handoff</strong><p>Pass the learning to the next shift.</p></div><span className="rowNumber">03</span></div>
              <div className="briefingFoot">Human judgment, supported. Not replaced.</div>
            </div>
            <span className="sceneNote">A little less repetition. A little more room to lead.</span>
          </div>
        </div>
        <div className="heroBottom container"><span>Independent restaurants. Shared ambition.</span><a href="#approach">Built for the everyday <span aria-hidden="true">↓</span></a></div>
      </header>
      <main id="main">
        <section className="intro section container" id="product">
          <p className="eyebrow">Introducing ProvisionOS</p>
          <div><h2>Your best operator can’t be<br className="desktopBreak" /> on every shift.</h2><p className="sectionLede">But their experience shouldn’t leave when they do. We’re building practical AI tools that help restaurant teams carry the owner’s know-how into the everyday.</p></div>
        </section>
        <section className="capabilitySection" aria-label="What we are building">
          <div className="capabilityGrid container">{capabilities.map((item) => <article className="capability" key={item.number}><div className="capabilityTop"><span>{item.number}</span><span aria-hidden="true">↗</span></div><p className="eyebrow">{item.tag}</p><h3>{item.name}</h3><p>{item.text}</p></article>)}</div>
        </section>
        <section className="approach section container" id="approach">
          <div><p className="eyebrow">Operator first. Always.</p><h2>Start with the shift.<br /><span className="muted">Not the platform pitch.</span></h2></div>
          <div className="approachSteps"><article><span>01 / Listen</span><h3>Find the repeated question.</h3><p>Start with the training gaps, manager questions, and handoffs that keep pulling you back in.</p></article><article><span>02 / Focus</span><h3>Work on one real workflow.</h3><p>Choose a focused use case and agree on what a useful result would look like for your team.</p></article><article><span>03 / Learn</span><h3>Measure what changes.</h3><p>Look at adoption, consistency, and time spent on repeat questions before expanding the scope.</p></article></div>
        </section>
        <section className="pilot" id="pilot"><div className="container pilotInner"><p className="eyebrow">Let’s build around real work</p><h2>Better shifts.<br />More room to lead.</h2><p>Exploring a design-partner pilot? Start with one workflow your team wants to improve.</p><div className="pilotPrompt"><strong>Which question do you answer every week?</strong><span>That’s a good place to start.</span></div><span className="contactNote">Pilot inquiries: contact details coming soon.</span></div></section>
      </main>
      <footer className="footer container"><a className="brand footerBrand" href="#top">ekonomy<span className="brandSuffix">ai</span></a><p>Practical intelligence. Human experience.</p><span>© {new Date().getFullYear()} Ekonomy AI</span></footer>
    </>
  );
}
