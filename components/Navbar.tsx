"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { navItems } from "@/lib/content";

export default function Navbar() {
  const [active, setActive] = useState<string>(navItems[0].id);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const moveIndicator = useCallback((id: string) => {
    const el = itemRefs.current[id];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    }
  }, []);

  // Scroll-spy: highlight the section currently in the viewport band.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Keep the indicator under the active item, including on resize.
  useEffect(() => {
    moveIndicator(active);
  }, [active, moveIndicator]);

  useEffect(() => {
    const onResize = () => moveIndicator(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, moveIndicator]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
      <nav
        aria-label="Primary"
        className="group pointer-events-auto relative flex max-w-[calc(100vw-2rem)] items-center gap-0.5 overflow-x-auto rounded-full border border-line/80 bg-white/65 p-1.5 shadow-pill backdrop-blur-xl backdrop-saturate-150 transition-transform duration-300 ease-out-expo scrollbar-hide hover:scale-[1.015]"
      >
        {/* sliding active indicator */}
        <span
          aria-hidden
          className="absolute inset-y-1.5 rounded-full bg-surface-hover transition-all duration-300 ease-out-expo"
          style={{
            left: indicator.left,
            width: indicator.width,
            opacity: indicator.ready ? 1 : 0,
          }}
        />
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              ref={(el) => {
                itemRefs.current[item.id] = el;
              }}
              onClick={() => setActive(item.id)}
              aria-current={isActive ? "true" : undefined}
              className={`relative z-10 shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 md:px-4 ${
                isActive ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
