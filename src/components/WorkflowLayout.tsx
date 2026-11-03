import Link from 'next/link';
import Head from 'next/head';
import type { ReactNode } from 'react';
import { site } from '../config/site';
export function WorkflowLayout({ title, description, path, children }: {title:string;description:string;path:string;children:ReactNode}) {
 return <><Head><title>{title} | Ekonomy AI</title><meta name="description" content={description}/><link rel="canonical" href={`${site.url}${path}`}/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:url" content={`${site.url}${path}`}/><link rel="icon" href="/brand/ekonomyai-navy.svg"/></Head><Link className="skipLink" href="#main">Skip to content</Link><header className="workflowNav"><nav className="container" aria-label="Primary"><Link className="brand" href="/">ekonomy<span className="brandSuffix">ai</span></Link><Link href="/workflows/">Explore workflows ↗</Link></nav></header><main id="main">{children}</main><footer className="footer container"><Link href="/">Ekonomy AI · ProvisionOS</Link><p>Human decisions. Reviewable work.</p><Link href="/workflows/">All workflows</Link></footer></>;
}
