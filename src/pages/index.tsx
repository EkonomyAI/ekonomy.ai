import Head from 'next/head';
import Image from 'next/image';
import { site } from '@/config/site';

const proofPoints = [
  '$4.8K committed design-partner MRR',
  '8-location restaurant operator pilot',
  '90-day coaching and training scorecard',
  'Expansion path into margin, purchasing, and vendor memory',
];

const workflows = [
  'Train managers on owner-specific standards',
  'Capture recurring exceptions before they become SOP drift',
  'Turn operational chat history into reusable store memory',
  'Measure adoption, time recovered, and revenue protection',
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${site.name} | ${site.product}`}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={`${site.name} | ${site.product}`} />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <section className="hero">
          <nav className="nav" aria-label="Primary">
            <a className="brand" href="#top" aria-label="Ekonomy AI home">
              <span className="brandMark">E</span>
              <span>{site.name}</span>
            </a>
            <div className="navLinks">
              <a href="#product">ProvisionOS</a>
              <a href="#proof">Proof</a>
              <a href="#pilot">Pilot</a>
            </div>
          </nav>

          <div className="heroGrid" id="top">
            <div className="heroCopy">
              <p className="eyebrow">Restaurant operating intelligence</p>
              <h1>Ekonomy AI builds the operating memory layer for independent restaurants.</h1>
              <p className="lede">
                ProvisionOS starts where operators already feel pain: coaching, training,
                and making owner judgment repeatable across managers, locations, and shifts.
              </p>
              <div className="actions" aria-label="Primary actions">
                <a className="primaryAction" href="#pilot">View pilot shape</a>
                <a className="secondaryAction" href="#product">See product thesis</a>
              </div>
            </div>

            <div className="deckFrame" aria-label="ProvisionOS pitch deck preview">
              <Image
                src="/provisionos-deck-preview.png"
                alt="ProvisionOS investor deck preview"
                width={1600}
                height={900}
                priority
              />
            </div>
          </div>
        </section>

        <section className="band" id="product">
          <div className="sectionHeader">
            <p className="eyebrow">Near-term product</p>
            <h2>ProvisionOS turns restaurant know-how into software memory.</h2>
          </div>
          <div className="threeCol">
            <article>
              <span className="kicker">Capture</span>
              <h3>Owner judgment</h3>
              <p>People, roles, recipes, vendor quirks, equipment, pricing, and exceptions become usable context.</p>
            </article>
            <article>
              <span className="kicker">Coach</span>
              <h3>Managers and staff</h3>
              <p>The first wedge is practical AI coaching and training that reduces repeated owner intervention.</p>
            </article>
            <article>
              <span className="kicker">Expand</span>
              <h3>Margin workflows</h3>
              <p>Once trusted, the same memory supports purchasing, inventory, vendor negotiations, and P&amp;L discipline.</p>
            </article>
          </div>
        </section>

        <section className="splitBand" id="proof">
          <div>
            <p className="eyebrow">Why now</p>
            <h2>Independent restaurants are under-managed by software and over-dependent on memory.</h2>
          </div>
          <div className="proofList">
            {proofPoints.map((point) => (
              <div className="proofItem" key={point}>{point}</div>
            ))}
          </div>
        </section>

        <section className="band pilot" id="pilot">
          <div className="sectionHeader">
            <p className="eyebrow">90-day design partner</p>
            <h2>Prove behavior change before asking operators to believe the platform story.</h2>
          </div>
          <div className="workflowGrid">
            {workflows.map((workflow) => (
              <div className="workflow" key={workflow}>{workflow}</div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
