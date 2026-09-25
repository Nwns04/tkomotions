import { useState } from 'react';
import { useLogistics } from '../context/LogisticsContext';
import { nigerianCities } from '../data/routes';
import { formatNaira } from '../../shared/utils/formatCurrency';

function LR_QuoteCalculator() {
  const { calculateQuote, quoteData, isQuoteLoading } = useLogistics();
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    packageType: 'Document',
    weight: 1,
    deliverySpeed: 'Standard',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateQuote(formData);
  };

  const packageTypes = ['Document', 'Small Package', 'Medium Package', 'Large Package', 'Fragile Item'];
  const deliverySpeeds = ['Same Day', 'Next Day', 'Standard'];

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-lr-off-white/50 mb-2">Pickup Location</label>
            <select
              value={formData.pickup}
              onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
              className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white focus:outline-none focus:border-lr-lime transition-colors"
              required
            >
              <option value="" className="bg-lr-black">Select pickup location</option>
              {nigerianCities.map(city => (
                <option key={city} value={city} className="bg-lr-black">{city}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-lr-off-white/50 mb-2">Destination</label>
            <select
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white focus:outline-none focus:border-lr-lime transition-colors"
              required
            >
              <option value="" className="bg-lr-black">Select destination</option>
              {nigerianCities.map(city => (
                <option key={city} value={city} className="bg-lr-black">{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-lr-off-white/50 mb-2">Package Type</label>
            <select
              value={formData.packageType}
              onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
              className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white focus:outline-none focus:border-lr-lime transition-colors"
            >
              {packageTypes.map(type => (
                <option key={type} value={type} className="bg-lr-black">{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-lr-off-white/50 mb-2">Weight (kg)</label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: parseFloat(e.target.value) })}
              className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white focus:outline-none focus:border-lr-lime transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-lr-off-white/50 mb-2">Delivery Speed</label>
            <select
              value={formData.deliverySpeed}
              onChange={(e) => setFormData({ ...formData, deliverySpeed: e.target.value })}
              className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white focus:outline-none focus:border-lr-lime transition-colors"
            >
              {deliverySpeeds.map(speed => (
                <option key={speed} value={speed} className="bg-lr-black">{speed}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isQuoteLoading}
          className="w-full bg-lr-lime text-lr-black px-6 py-4 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isQuoteLoading ? 'Calculating...' : 'Calculate Estimate →'}
        </button>
      </form>

      {/* Quote Result */}
      {quoteData && (
        <div className="mt-8 bg-lr-surface border border-lr-lime p-6">
          <p className="text-xs font-mono uppercase tracking-wider text-lr-off-white/50 mb-2">Estimated Delivery</p>
          <p className="text-4xl font-bold text-lr-lime mb-4">{formatNaira(quoteData.estimatedPrice)}</p>
          <p className="text-lr-off-white/70 mb-2">Estimated arrival: <span className="font-mono text-lr-lime">{quoteData.estimatedArrival}</span></p>
          <p className="text-xs text-lr-off-white/40 mb-6">* This is a demonstration estimate. Actual pricing may vary.</p>
          <button className="w-full bg-lr-lime text-lr-black px-6 py-3 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors">
            Request This Delivery
          </button>
        </div>
      )}
    </div>
  );
}

export default LR_QuoteCalculator;