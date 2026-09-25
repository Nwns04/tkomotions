import { useTracking } from '../hooks/useTracking';
import LR_TrackingForm from './LR_TrackingForm';
import LR_TrackingResult from './LR_TrackingResult';

export default function LR_TrackingPanel() {
  const { trackingResult } = useTracking();
  return <div className="border-t-4 border-orange-500 bg-[#f0f2ed] p-6 sm:p-8"><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Shipment control</p><h2 className="mb-5 text-2xl font-black text-slate-950">Where is your freight?</h2><LR_TrackingForm /><LR_TrackingResult result={trackingResult} /><p className="mt-5 text-xs text-black/45">Try demo number: NLT240891</p></div>;
}