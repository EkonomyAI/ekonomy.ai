/** Reproducible frame exports. Requires playwright-core and ffmpeg available locally. */
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { workflows } from '../src/data/workflows';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
const ffmpeg = process.env.FFMPEG || 'ffmpeg';
async function main() {
const browser = await chromium.launch({headless:true,executablePath:process.env.BROWSER_EXECUTABLE || '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'});
const page = await browser.newPage({viewport:{width:1000,height:750},deviceScaleFactor:1});
mkdirSync('public/demos',{recursive:true});mkdirSync('/tmp/ekonomy-demo-frames',{recursive:true});
const manifest:object[]=[];
for (const w of workflows) {
 for(let frame=0;frame<5;frame++){
  await page.goto(`http://127.0.0.1:3346/demo-render/?scene=${w.slug}&frame=${frame}`);
  await page.waitForFunction(({title,frame}:{title:string;frame:number})=>document.querySelector('.channelTitle')?.textContent?.includes(title.toLowerCase()) && document.querySelectorAll('.message').length===frame+1,{title:w.shortTitle,frame});
  await page.screenshot({path:`/tmp/ekonomy-demo-frames/${w.slug}-${frame}.png`});
 }
 const frames=Array.from({length:5},(_,i)=>`file '/tmp/ekonomy-demo-frames/${w.slug}-${i}.png'\nduration ${i===4?6:3.5}`).join('\n')+`\nfile '/tmp/ekonomy-demo-frames/${w.slug}-4.png'\n`;
 writeFileSync(`/tmp/ekonomy-demo-frames/${w.slug}.txt`,frames);
 execFileSync(ffmpeg,['-y','-v','error','-f','concat','-safe','0','-i',`/tmp/ekonomy-demo-frames/${w.slug}.txt`,'-t','20','-vf','fps=10,format=yuv420p','-c:v','libx264','-crf','23','-movflags','+faststart',`public/demos/${w.slug}.mp4`]);
 execFileSync(ffmpeg,['-y','-v','error','-i',`public/demos/${w.slug}.mp4`,'-vf','fps=2,split[a][b];[a]palettegen=stats_mode=diff[p];[b][p]paletteuse=dither=bayer','-loop','0',`public/demos/${w.slug}.gif`]);
 execFileSync(ffmpeg,['-y','-v','error','-i',`/tmp/ekonomy-demo-frames/${w.slug}-4.png`,'-frames:v','1',`public/demos/${w.slug}.png`]);
 manifest.push({slug:w.slug,width:1000,height:750,duration:20,gifBytes:statSync(`public/demos/${w.slug}.gif`).size,mp4Bytes:statSync(`public/demos/${w.slug}.mp4`).size});
}
// Homepage: concise first-three-workflow montage, 12 seconds per scene.
writeFileSync('/tmp/ekonomy-demo-frames/homepage.txt',workflows.slice(0,3).map(w=>`file '${process.cwd()}/public/demos/${w.slug}.mp4'\ninpoint 8\noutpoint 20`).join('\n'));
execFileSync(ffmpeg,['-y','-v','error','-f','concat','-safe','0','-i','/tmp/ekonomy-demo-frames/homepage.txt','-t','36','-vf','fps=10,format=yuv420p','-c:v','libx264','-crf','23','-movflags','+faststart','public/demos/homepage.mp4']);
execFileSync(ffmpeg,['-y','-v','error','-i','public/demos/homepage.mp4','-vf','fps=2,split[a][b];[a]palettegen[p];[b][p]paletteuse=dither=bayer','-loop','0','public/demos/homepage.gif']);
execFileSync(ffmpeg,['-y','-v','error','-i',`public/demos/${workflows[0].slug}.png`,'-frames:v','1','public/demos/homepage.png']);
manifest.push({slug:'homepage',width:1000,height:750,duration:36,gifBytes:statSync('public/demos/homepage.gif').size,mp4Bytes:statSync('public/demos/homepage.mp4').size});
writeFileSync('public/demos/manifest.json',JSON.stringify(manifest,null,2)+'\n');
await browser.close();
console.log(JSON.stringify(manifest,null,2));

}
main().catch(error => { console.error(error); process.exit(1); });
