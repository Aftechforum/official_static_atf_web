"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect, useState } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Defer PostHog initialization until after page load
    // This prevents blocking the critical rendering path
    const initPostHog = () => {
      if (!isInitialized && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host: "/ingest",
          ui_host: "https://eu.posthog.com",
          defaults: "2025-05-24",
          capture_exceptions: true,
          debug: process.env.NODE_ENV === "development",
          // Disable automatic pageview capture on load to further reduce initial overhead
          capture_pageview: false,
          // Capture pageview manually after init
          loaded: (ph) => {
            ph.capture("$pageview");
          },
        });
        setIsInitialized(true);
      }
    };

    // Use requestIdleCallback for non-critical initialization
    // Falls back to setTimeout for browsers that don't support it
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as typeof window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(initPostHog);
      } else {
        // Fallback: delay initialization by 2 seconds
        setTimeout(initPostHog, 2000);
      }
    }
  }, [isInitialized]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
