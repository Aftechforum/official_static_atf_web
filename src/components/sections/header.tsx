"use client";

import Drawer from "@/components/drawer";
import { AftLogoWrapper } from "@/components/icons";
import Menu from "@/components/menu";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
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
    <header
      className={
        "relative= sticky top-0 z-50 py-2 bg-background/60 backdrop-blur"
      }
    >
      <div className="flex justify-between items-center container">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <AftLogoWrapper className="h-[60px]" />

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
    </header>
  );
}
