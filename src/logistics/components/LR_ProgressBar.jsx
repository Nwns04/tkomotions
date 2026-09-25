export default function LR_ProgressBar({ progress }) {
  return <div className="h-2 bg-black/10"><div className="h-full bg-orange-500 transition-all duration-700" style={{ width: `${progress}%` }} /></div>;
}