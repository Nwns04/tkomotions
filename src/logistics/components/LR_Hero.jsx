import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogistics } from '../context/LogisticsContext';
import { companyInfo } from '../data/company';

function LR_Hero() {
  const { trackShipment } = useLogistics();
  const [trackingInput, setTrackingInput] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingInput) {
      trackShipment(trackingInput);
      window.location.href = '/logistics/tracking';
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-lr-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={companyInfo.images.hero} alt="SwiftRoute fleet" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-lr-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-lr-black via-lr-black/70 to-transparent" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#2A2A2C 1px, transparent 1px), linear-gradient(90deg, #2A2A2C 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <p className="font-mono text-lr-lime text-sm uppercase tracking-widest mb-4">
            Technology-Driven Logistics
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-lr-off-white leading-none tracking-tight mb-6">
            MOVING<br />BUSINESS<br /><span className="text-lr-lime">FORWARD.</span>
          </h1>
          <p className="text-lr-off-white/70 text-lg mb-8 max-w-md">
            SwiftRoute helps businesses move products, documents and inventory quickly and reliably across Nigeria.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/logistics/contact" className="bg-lr-lime text-lr-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors">
              Get a Quote
            </Link>
            <Link to="/logistics/tracking" className="border border-lr-off-white/30 text-lr-off-white px-8 py-4 font-semibold uppercase tracking-wider hover:border-lr-lime hover:text-lr-lime transition-colors">
              Track Shipment
            </Link>
          </div>
        </div>

        {/* Right: Tracking Panel */}
        <div className="bg-lr-surface border border-lr-border p-6 lg:max-w-md ml-auto w-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-lr-off-white uppercase tracking-wider text-sm">Track Shipment</h3>
            <span className="w-2 h-2 bg-lr-green rounded-full animate-pulse" />
          </div>
          
          <form onSubmit={handleTrack} className="space-y-4">
            <input
              type="text"
              value={trackingInput}
              onChange={(e) => setTrackingInput(e.target.value)}
              placeholder="Enter tracking number (e.g., SWR-2048-7392)"
              className="w-full px-4 py-3 bg-lr-black border border-lr-border text-lr-off-white font-mono placeholder-lr-off-white/30 focus:outline-none focus:border-lr-lime transition-colors"
            />
            <button type="submit" className="w-full bg-lr-lime text-lr-black px-6 py-3 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors">
              Track Shipment →
            </button>
          </form>

          {/* Live Data */}
          <div className="mt-6 pt-6 border-t border-lr-border grid grid-cols-3 gap-4">
            <div>
              <p className="font-mono text-lr-lime text-2xl font-bold">{companyInfo.stats.vehicles}</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-lr-off-white/50 mt-1">Vehicles</p>
            </div>
            <div>
              <p className="font-mono text-lr-lime text-2xl font-bold">{companyInfo.stats.hubs}</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-lr-off-white/50 mt-1">Hubs</p>
            </div>
            <div>
              <p className="font-mono text-lr-lime text-2xl font-bold">{companyInfo.stats.onTimeDelivery}%</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-lr-off-white/50 mt-1">On-Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LR_Hero;