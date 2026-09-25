import { createContext, useContext, useState } from 'react';

const LogisticsContext = createContext(null);

export function useLogistics() {
  return useContext(LogisticsContext);
}

export function LogisticsProvider({ children }) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [quoteData, setQuoteData] = useState(null);
  const [isTrackingLoading, setIsTrackingLoading] = useState(false);
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);

  const trackShipment = (number) => {
    setIsTrackingLoading(true);
    setTrackingResult(null);
    
    setTimeout(() => {
      const { trackingShipments } = require('../data/trackingData');
      const result = trackingShipments[number] || null;
      setTrackingResult(result);
      setIsTrackingLoading(false);
    }, 800);
  };

  const calculateQuote = (data) => {
    setIsQuoteLoading(true);
    setQuoteData(null);
    
    setTimeout(() => {
      // Simple quote calculation logic
      const basePrice = {
        'Document': 2500,
        'Small Package': 5000,
        'Medium Package': 10000,
        'Large Package': 20000,
        'Fragile Item': 15000,
      };
      
      const speedMultiplier = {
        'Same Day': 2.5,
        'Next Day': 1.8,
        'Standard': 1,
      };
      
      const base = basePrice[data.packageType] || 5000;
      const speed = speedMultiplier[data.deliverySpeed] || 1;
      const weightFactor = Math.max(1, data.weight / 5);
      const total = Math.round((base * speed * weightFactor) / 100) * 100;
      
      const arrivalTimes = {
        'Same Day': 'Today, before 8:00 PM',
        'Next Day': 'Tomorrow, before 5:00 PM',
        'Standard': 'Within 2-3 business days',
      };
      
      setQuoteData({
        ...data,
        estimatedPrice: total,
        estimatedArrival: arrivalTimes[data.deliverySpeed],
      });
      setIsQuoteLoading(false);
    }, 600);
  };

  const resetTracking = () => {
    setTrackingNumber('');
    setTrackingResult(null);
  };

  const resetQuote = () => {
    setQuoteData(null);
  };

  return (
    <LogisticsContext.Provider value={{
      trackingNumber,
      setTrackingNumber,
      trackingResult,
      trackShipment,
      resetTracking,
      isTrackingLoading,
      quoteData,
      calculateQuote,
      resetQuote,
      isQuoteLoading,
    }}>
      {children}
    </LogisticsContext.Provider>
  );
}

export default LogisticsContext;