"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SplashContext = createContext(true);

/** True once the intro splash has started leaving the screen. */
export function useSplashDone() {
  return useContext(SplashContext);
}

const brandLetters = "RIYOX".split("");
const foodsLetters = "FOODS".split("");

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Entrance runs in CSS from first paint, so time the exit from navigation start.
    const total = reduceMotion ? 700 : 2300;
    const timer = setTimeout(
      () => setVisible(false),
      Math.max(400, total - performance.now())
    );
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    document.documentElement.style.overflow = visible ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  return (
    <SplashContext.Provider value={!visible}>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="splash"
            role="status"
            aria-label="Loading Riyox Foods"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="splash-fallback fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-cream-100"
          >
            <div className="bg-leaf-texture pointer-events-none absolute inset-0 opacity-70" />
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sun-200/60 blur-3xl" />

            <motion.div
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="relative flex flex-col items-center px-6"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="splash-mark">
                  <Image
                    src="/images/brand/riyox-mark.png"
                    alt=""
                    width={879}
                    height={1211}
                    priority
                    className="h-12 w-auto sm:h-14"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-display flex text-[2.6rem] font-black leading-none sm:text-5xl">
                    {brandLetters.map((letter, i) => (
                      <span
                        key={i}
                        style={{ "--i": i } as React.CSSProperties}
                        className="splash-letter text-brand-gradient"
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                  <span
                    className="splash-foods font-display mt-1 flex text-[0.95rem] font-bold leading-none sm:text-lg"
                  >
                    {foodsLetters.map((letter, i) => (
                      <span key={i} className="text-sun-gradient">
                        {letter}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              <p
                className="splash-tagline font-display mt-4 text-[0.7rem] font-semibold tracking-[0.25em] text-ink-500 sm:text-xs"
              >
                Where Trust Meets Quality
              </p>

              <div className="mt-5 h-0.5 w-32 overflow-hidden rounded-full bg-ink-100 sm:w-40">
                <div
                  className="splash-bar h-full rounded-full bg-gradient-to-r from-sun-500 via-sun-300 to-brand-500"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </SplashContext.Provider>
  );
}
