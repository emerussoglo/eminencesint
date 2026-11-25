'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  triggerOnce?: boolean;
  /** Use display: contents to avoid breaking CSS Grid/Flex layouts */
  inline?: boolean;
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  once = true,
  triggerOnce = true,
  inline = false,
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
    ...(inline ? { display: 'contents' as const } : {}),
  };

  // When inline, we can't use a ref on a fragment, so we render a div with display: contents
  // This preserves grid/flex layout while still allowing animation
  if (inline) {
    return (
      <div ref={ref} className={className} style={baseStyles}>
        {children}
      </div>
    );
  }

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
    <>
      {childArray.map((child, index) => {
        if (!React.isValidElement(child)) return child;
        const childProps = child.props as { delay?: number; threshold?: number; rootMargin?: string; inline?: boolean };
        return React.cloneElement(child as React.ReactElement<any>, {
          delay: (childProps.delay ?? 0) + index * staggerDelay,
          threshold,
          rootMargin,
          inline: true, // Use display: contents to preserve grid/flex layouts
        });
      })}
    </>
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