"use client";

import { AftLogoWrapper } from "@/components/icons";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";

export default function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <div className="">
            <Link
              href="/"
              title="brand-logo"
              className="relative mr-6 flex items-center space-x-2"
            >
              <AftLogoWrapper className="w-auto h-[40px]" />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
          </div>
          <nav>
            <ul className="mt-7 text-left">
              {siteConfig.header.map((item, index) => (
                <li key={index} className="my-3">
                  <Link href={item.href || ""} className="font-semibold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

