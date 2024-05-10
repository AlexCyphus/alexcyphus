import { useRef, useEffect } from 'react';

const useDisableGlobeScroll = () => {
  const globeEl = useRef<any>(null);

  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.7;
  }, []);

  return globeEl;
};

export default useDisableGlobeScroll;