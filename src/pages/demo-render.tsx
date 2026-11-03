import { useRouter } from 'next/router';
import { workflows } from '../data/workflows';
import { Conversation } from '../components/Conversation';
import Head from 'next/head';
export default function DemoRender(){const {query}=useRouter();const w=workflows.find(w=>w.slug===query.scene)||workflows[0];const frame=Math.min(4,Math.max(0,Number(query.frame)||0));return <><Head><meta name="robots" content="noindex"/></Head><div className="exportFrame"><Conversation workflow={w} frame={frame}/></div></>;}
