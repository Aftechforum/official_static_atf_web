"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function HeaderScrollBorder() {
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
    <div
      className={cn(
        "absolute w-full bottom-0 transition-opacity duration-300 ease-in-out bg-yellow-900 h-[2px] ",
        addBorder ? "opacity-25" : "opacity-0"
      )}
    />
  );
}

