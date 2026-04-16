import { useEffect, useRef } from "react";
import { animate, utils } from "animejs";

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // v4 syntax: animate(target, options)
          animate(entry.target, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 800,
            ease: "outExpo",
            ...options,
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        ...options.observerOptions,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return ref;
};

export const useCountUp = (targetValue, duration = 2000) => {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        // v4: Animate a plain JS object
        const countObj = { value: 0 };
        
        animate(countObj, {
          value: targetValue,
          duration,
          ease: "outExpo",
          // v4 uses onUpdate instead of update
          onUpdate: () => {
            if (ref.current) {
              ref.current.textContent = Math.floor(countObj.value);
            }
          },
          // v4 uses onComplete instead of complete
          onComplete: () => {
            if (ref.current) {
              ref.current.textContent = targetValue;
            }
          },
        });
        
        hasAnimated.current = true;
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetValue, duration]);

  return ref;
};

export const useParallaxScroll = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        const elementPos = ref.current.getBoundingClientRect().top + scrollY;
        const distance = scrollY - elementPos;

        // utils.set(target, properties)
        utils.set(ref.current, {
          translateY: distance * 0.5,
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return ref;
};

export const useMouseGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      utils.set(ref.current, {
        "--mouse-x": `${x}px`,
        "--mouse-y": `${y}px`,
      });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return ref;
};