import { useState } from 'react';

export function useQuoteCalculator() {
  const [quote, setQuote] = useState(null);
  const calculateQuote = ({ origin, destination, weight, service }) => {
    const base = service === 'same-day' ? 3500 : service === 'freight' ? 8500 : 5500;
    const distance = origin === destination ? 1 : 1.35;
    setQuote({ amount: Math.round((base + Number(weight || 1) * 250) * distance), origin, destination, service });
  };
  return { quote, calculateQuote };
}