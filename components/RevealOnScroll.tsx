'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  triggerOnce?: boolean;
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  once = true,
  triggerOnce = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (triggerOnce && hasTriggered) return;
            setTimeout(() => {
              setIsVisible(true);
              setHasTriggered(true);
            }, delay);
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once && !triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, threshold, rootMargin, once, triggerOnce, hasTriggered]);

  const baseStyles: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} className={className} style={baseStyles}>
      {children}
    </div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
  rootMargin?: string;
}

export function RevealGroup({
  children,
  className = '',
  staggerDelay = 120,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
}: RevealGroupProps) {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {childArray.map((child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<any>, {
          delay: (child.props.delay ?? 0) + index * staggerDelay,
          threshold,
          rootMargin,
        });
      })}
    </div>
  );
}

// Counter animation hook
export function useCounterAnimation(
  endValue: number,
  duration: number = 2000,
  startOnVisible: boolean = true
) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnVisible) {
      setCount(endValue);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(endValue);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setIsVisible(true);

            const startTime = performance.now();
            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(easedProgress * endValue));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(endValue);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [endValue, duration, startOnVisible]);

  return { ref, count, isVisible };
}

// Need React for isValidElement
import React from 'react';