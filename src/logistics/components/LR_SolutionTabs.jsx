import { useState } from 'react';

export default function LR_SolutionTabs({ solutions }) {
  const [active, setActive] = useState(solutions[0]);
  return <div><div className="flex flex-wrap gap-2 border-b border-black/15 pb-4">{solutions.map((solution) => <button key={solution.id} onClick={() => setActive(solution)} className={`px-4 py-2 text-sm font-bold ${active.id === solution.id ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'}`}>{solution.label}</button>)}</div><div className="grid gap-8 py-10 sm:grid-cols-[1fr_180px]"><div><h2 className="text-3xl font-black">{active.title}</h2><p className="mt-4 max-w-xl leading-7 text-black/55">{active.description}</p></div><div><p className="text-5xl font-black text-orange-600">{active.metric}</p><p className="mt-1 text-xs font-bold uppercase tracking-widest text-black/45">{active.metricLabel}</p></div></div></div>;
}