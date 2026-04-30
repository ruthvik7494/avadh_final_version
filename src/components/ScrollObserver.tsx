import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function ScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Once it's active, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Target elements with reveal or draw classes
    const targets = document.querySelectorAll(".reveal-up, .hairline-draw");
    targets.forEach((target) => {
      // If element is already in view or above the fold, activate it immediately
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        target.classList.add("active");
      } else {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]); // Re-run when navigation happens

  return null;
}
