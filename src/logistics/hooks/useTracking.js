import { useLogistics } from '../context/LogisticsContext';

export function useTracking() {
  return useLogistics();
}