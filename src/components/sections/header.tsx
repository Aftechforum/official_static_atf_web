import { AftLogoWrapper } from "@/components/icons";
import Link from "next/link";
import HeaderBanner from "./header-banner";
import dynamic from "next/dynamic";

// Lazy load Menu - SSR enabled to preserve SEO and accessibility for navigation links
const Menu = dynamic(() => import("@/components/menu"), {
  ssr: true,
  loading: () => (
    <nav className="flex items-center space-x-1">
      {/* Lightweight skeleton matching navigation structure */}
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className="h-10 w-20 px-4 py-2" />
      ))}
    </nav>
  ),
});

// Lazy load HeaderScrollBorder - scroll listener not needed immediately
const HeaderScrollBorder = dynamic(() => import("./header-scroll-border"), {
  ssr: false,
});

// Lazy load MobileDrawer - only needed on mobile interaction
const MobileDrawer = dynamic(() => import("./header-mobile-drawer"), {
  ssr: false,
  loading: () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <span className="text-2xl">☰</span>
    </div>
  ),
});

export default function Header({
  showBanner = false,
}: {
  showBanner?: boolean;
}) {
  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur">
      <div className="flex justify-between items-center container py-2">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <AftLogoWrapper className="h-12" />
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center">
            <nav className="mr-10">
              <Menu />
            </nav>
          </div>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <MobileDrawer />
        </div>
      </div>
      <HeaderScrollBorder />

      {/* News Announcement Banner */}
      {showBanner && <HeaderBanner />}
    </header>
  );
}
