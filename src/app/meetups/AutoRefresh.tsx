'use client';

import { useEffect } from 'react';

export const AutoRefresh = () => {
  useEffect(() => {
    const interval = setInterval(
      () => {
        window.location.reload();
      },
      // every hour
      1000 * 60 * 60
    );
    return () => clearInterval(interval);
  }, []);
  return null;
};
