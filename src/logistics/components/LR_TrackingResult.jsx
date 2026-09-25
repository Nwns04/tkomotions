function LR_TrackingResult({ result }) {
  if (!result) return null;

  const statusLabels = {
    'picked-up': 'Picked Up',
    'processing': 'Processing',
    'in-transit': 'In Transit',
    'out-for-delivery': 'Out for Delivery',
    'delivered': 'Delivered',
  };

  const statusColors = {
    'picked-up': 'text-lr-orange',
    'processing': 'text-lr-orange',
    'in-transit': 'text-lr-orange',
    'out-for-delivery': 'text-lr-lime',
    'delivered': 'text-lr-green',
  };

  return (
    <div className="bg-lr-surface border border-lr-border">
      {/* Header */}
      <div className="p-6 border-b border-lr-border flex items-center justify-between">
        <div>
          <p className="font-mono text-sm text-lr-off-white/50 mb-1">{result.trackingNumber}</p>
          <h3 className={`text-2xl font-bold ${statusColors[result.status]}`}>
            {statusLabels[result.status]}
          </h3>
        </div>
        <span className="w-3 h-3 bg-lr-lime rounded-full animate-pulse" />
      </div>

      {/* Details */}
      <div className="p-6 border-b border-lr-border grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-lr-off-white/40 mb-1">Current Location</p>
          <p className="text-lr-off-white font-medium">{result.currentLocation}</p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-lr-off-white/40 mb-1">Est. Delivery</p>
          <p className="text-lr-lime font-mono">{result.estimatedDelivery}</p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-lr-off-white/40 mb-1">Package</p>
          <p className="text-lr-off-white font-medium">{result.packageType}</p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-lr-off-white/40 mb-1">Weight</p>
          <p className="text-lr-off-white font-medium">{result.weight}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="p-6">
        <div className="space-y-0">
          {result.timeline.map((step, index) => (
            <div key={index} className="flex gap-4 relative pb-6 last:pb-0">
              {/* Vertical Line */}
              {index < result.timeline.length - 1 && (
                <div className={`absolute left-2.5 top-6 bottom-0 w-px ${
                  step.completed ? 'bg-lr-lime' : 'bg-lr-border'
                }`} />
              )}
              
              {/* Dot */}
              <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${
                step.completed ? 'bg-lr-lime' : 'bg-lr-border'
              }`}>
                {step.completed && (
                  <svg className="w-3 h-3 text-lr-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className={`font-medium ${step.completed ? 'text-lr-off-white' : 'text-lr-off-white/40'}`}>
                    {step.status}
                  </p>
                  <p className="font-mono text-xs text-lr-off-white/40">{step.time}</p>
                </div>
                <p className="text-sm text-lr-off-white/50">{step.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle & Driver */}
      <div className="p-6 border-t border-lr-border grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-lr-off-white/40 mb-1">Vehicle</p>
          <p className="text-lr-off-white font-mono">{result.vehicle}</p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-lr-off-white/40 mb-1">Driver</p>
          <p className="text-lr-off-white font-mono">{result.driver}</p>
        </div>
      </div>
    </div>
  );
}

export default LR_TrackingResult;