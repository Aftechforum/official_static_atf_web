"use client";

import Drawer from "@/components/drawer";
import { AftLogoWrapper } from "@/components/icons";
import Menu from "@/components/menu";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({
  showBanner = false,
}: {
  showBanner?: boolean;
}) {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={"sticky top-0 z-50 bg-background/60 backdrop-blur"}>
      <div className="flex justify-between items-center container py-2">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <AftLogoWrapper className="h-[60px]== h-12" />

          {/* <span className="font-bold text-xl">{siteConfig.name}</span> */}
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center ">
            <nav className="mr-10">
              <Menu />
            </nav>
          </div>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <Drawer />
        </div>
      </div>
      <div
        className={cn(
          "absolute w-full bottom-0 transition-opacity duration-300 ease-in-out bg-yellow-900 h-[2px] ",
          addBorder ? "opacity-25" : "opacity-0"
        )}
      />

      {/* News Announcement Banner */}
      {showBanner && (
        <div className="border-b border-gray-200 bg-white overflow-hidden">
          <div className="relative py-2">
            <style jsx>{`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll-left 30s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First copy */}
              <div className="flex items-center gap-2 px-8 text-sm">
                <span className="text-gray-900 font-bold">
                  📣 The Future of African AI is Here
                </span>
                <span className="text-gray-700">
                  The African Technology Forum, with $1M in support from
                  Google.org...
                </span>
                <span className="font-bold text-atf-teal underline cursor-pointer hover:text-atf-teal/80">
                  <Link href="/google-support">Read more</Link>
                </span>
              </div>
              {/* Second copy for seamless loop */}
              <div className="flex items-center gap-2 px-8 text-sm">
                <span className="text-gray-900 font-bold">
                  📣 The Future of African AI is Here
                </span>
                <span className="text-gray-700">
                  The African Technology Forum, with $1M in support from
                  Google.org...
                </span>
                <span className="font-bold text-atf-teal underline cursor-pointer hover:text-atf-teal/80">
                  <Link href="/google-support">Read more</Link>
                </span>
              </div>
              {/* Third copy for seamless loop */}
              <div className="flex items-center gap-2 px-8 text-sm">
                <span className="text-gray-900 font-bold">
                  📣 The Future of African AI is Here
                </span>
                <span className="text-gray-700">
                  The African Technology Forum, with $1M in support from
                  Google.org...
                </span>
                <span className="font-bold text-atf-teal underline cursor-pointer hover:text-atf-teal/80">
                  <Link href="/google-support">Read more</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
