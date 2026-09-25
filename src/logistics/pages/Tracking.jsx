import LR_TrackingForm from '../components/LR_TrackingForm';
import LR_TrackingResult from '../components/LR_TrackingResult';
import LR_SectionHeading from '../components/LR_SectionHeading';
import { useLogistics } from '../context/LogisticsContext';

function Tracking() {
  const { trackingResult, isTrackingLoading } = useLogistics();

  return (
    <>
      <div className="bg-lr-surface border-b border-lr-border py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-lr-lime text-sm uppercase tracking-widest mb-3">Track Shipment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-lr-off-white mb-4">Where Is Your Package?</h1>
          <p className="text-lr-off-white/60 text-lg mb-8">Enter your tracking number for real-time shipment visibility.</p>
          <LR_TrackingForm />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isTrackingLoading ? (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-2 border-lr-lime border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="font-mono text-lr-off-white/50 mt-4">Locating shipment...</p>
          </div>
        ) : trackingResult ? (
          <LR_TrackingResult result={trackingResult} />
        ) : (
          <div className="text-center py-20">
            <p className="text-lr-off-white/40">Enter a tracking number to see shipment details.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Tracking;