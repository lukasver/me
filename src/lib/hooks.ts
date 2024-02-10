'use client';

import { useCallback, useEffect, useState } from 'react';

export const useVisbilityState = () => {
  const [visibilityState, setVisibilityState] = useState<
    typeof document.visibilityState | null
  >(null);

  const handleVisbilityChange = useCallback(() => {
    setVisibilityState(document.visibilityState);
  }, [setVisibilityState]);

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisbilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisbilityChange);
  }, [handleVisbilityChange]);

  return visibilityState;
};
