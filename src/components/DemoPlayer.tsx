import { useEffect, useRef, useState } from 'react';
export function DemoPlayer({ slug, title, autoPlay = false }: {slug: string; title: string; autoPlay?: boolean}) {
 const ref = useRef<HTMLVideoElement>(null);
 const [playing, setPlaying] = useState(false);
 useEffect(() => {
   const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
   const sync = () => { if (preference.matches) ref.current?.pause(); else if (autoPlay) void ref.current?.play().catch(() => {}); };
   sync(); preference.addEventListener('change', sync);
   return () => preference.removeEventListener('change', sync);
 }, [autoPlay]);
 return <figure className="demoPlayer"><video ref={ref} controls muted loop playsInline preload="none" poster={`/demos/${slug}.png`} aria-label={`${title}: illustrative workflow using fictional data`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}><source src={`/demos/${slug}.mp4`} type="video/mp4" /></video><figcaption><button type="button" onClick={() => playing ? ref.current?.pause() : void ref.current?.play()}>{playing ? 'Pause demo' : 'Play demo'}</button><a href={`/demos/${slug}.gif`} download>Download GIF</a></figcaption></figure>;
}
