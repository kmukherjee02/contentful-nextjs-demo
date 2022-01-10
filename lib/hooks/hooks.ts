import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';

export function useOnScreen(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);
    return () => { observerRef.current.disconnect() };
  }, [ref]);

  return isOnScreen;
}

export function useCloseNavOnUrlChange(setState: Dispatch<SetStateAction<boolean>>) {
  const router: NextRouter = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {setState(false)};
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {router.events.off('routeChangeStart', handleRouteChange)};
  }, [router.events]);
}
