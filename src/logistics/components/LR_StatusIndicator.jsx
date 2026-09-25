export default function LR_StatusIndicator({ children = 'All systems operational' }) {
  return <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-lime-300"><span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_#bef264]" />{children}</span>;
}