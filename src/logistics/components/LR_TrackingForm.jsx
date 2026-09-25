import { useState } from 'react';
import { useLogistics } from '../context/LogisticsContext';
import { mockTrackingNumbers } from '../data/trackingData';

function LR_TrackingForm() {
  const { trackShipment, isTrackingLoading } = useLogistics();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      trackShipment(input);
    }
  };

  const handleMockNumber = (number) => {
    setInput(number);
    trackShipment(number);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter tracking number (e.g., SWR-2048-7392)"
          className="w-full px-4 py-4 bg-lr-surface border border-lr-border text-lr-off-white font-mono placeholder-lr-off-white/30 focus:outline-none focus:border-lr-lime transition-colors text-lg"
        />
        <button
          type="submit"
          disabled={isTrackingLoading}
          className="w-full bg-lr-lime text-lr-black px-6 py-4 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isTrackingLoading ? 'Tracking...' : 'Track Shipment →'}
        </button>
      </form>

      {/* Demo Tracking Numbers */}
      <div className="mt-6">
        <p className="text-xs font-mono uppercase tracking-wider text-lr-off-white/50 mb-3">Demo Tracking Numbers:</p>
        <div className="flex flex-wrap gap-2">
          {mockTrackingNumbers.map(number => (
            <button
              key={number}
              onClick={() => handleMockNumber(number)}
              className="text-xs font-mono text-lr-lime border border-lr-border px-3 py-1 hover:border-lr-lime transition-colors"
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LR_TrackingForm;