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

    const scan = () => {
      const targets = document.querySelectorAll(".reveal-up, .hairline-draw");
      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          target.classList.add("active");
        } else {
          observer.observe(target);
        }
      });
    };

    // Initial scan
    scan();

    // Secondary scan after a short delay for React rendering
    const timer = setTimeout(scan, 100);

    // Watch for new elements being added
    const mutationObserver = new MutationObserver(() => {
      scan();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer);
    };
  }, [location.pathname]); // Re-run when navigation happens

  return null;
}
