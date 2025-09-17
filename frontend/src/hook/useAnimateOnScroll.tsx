import { useEffect, useRef, useState } from "react";

export interface UseAnimateOnScrollOptions extends IntersectionObserverInit {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  fallbackCheck?: boolean;
}

export const useAnimateOnScroll = (
  content?: unknown,
  options?: UseAnimateOnScrollOptions,
) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const {
      threshold = options?.threshold || [0.1],
      rootMargin = "0px 0px -50px 0px",
      triggerOnce = false,
      fallbackCheck = true,
      ...otherOptions
    } = options || {};

    const checkVisibility = () => {
      if (!ref.current) return false;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const isInViewport =
        rect.top < windowHeight &&
        rect.bottom > 0 &&
        rect.left < windowWidth &&
        rect.right > 0;

      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleWidth =
        Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
      const elementArea = rect.height * rect.width;
      const visibleArea =
        Math.max(0, visibleHeight) * Math.max(0, visibleWidth);
      const visibilityRatio = elementArea > 0 ? visibleArea / elementArea : 0;

      return isInViewport && visibilityRatio > 0.05;
    };

    if (fallbackCheck && checkVisibility()) {
      setIsVisible(true);
      if (triggerOnce) setHasTriggered(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const shouldBeVisible =
            entry.isIntersecting && entry.intersectionRatio > 0;

          if (shouldBeVisible) {
            if (!triggerOnce || !hasTriggered) {
              setIsVisible(true);
              if (triggerOnce) setHasTriggered(true);
            }
          } else {
            if (!triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
        ...otherOptions,
      }
    );

    observer.observe(ref.current);

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (fallbackCheck && !isVisible && checkVisibility()) {
          setIsVisible(true);
          if (triggerOnce) setHasTriggered(true);
        }
      }, 100);
    };

    if (fallbackCheck) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      if (fallbackCheck) {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout);
      }
    };
  }, [content, options?.threshold, options?.rootMargin, options?.triggerOnce]);

  return { ref, isVisible };
};