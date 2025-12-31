import { ThemeProvider } from "@/components/theme-provider";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import dynamic from "next/dynamic";

// Lazy load ThemeToggle to reduce initial JS bundle
const ThemeToggle = dynamic(
  () => import("@/components/theme-toggle").then((mod) => mod.ThemeToggle),
  { ssr: false }
);

// Lazy load PostHogProvider - analytics not needed for initial render
const PostHogProvider = dynamic(
  () =>
    import("@/components/PostHogProvider").then((mod) => mod.PostHogProvider),
  { ssr: false }
);

// Self-hosted fonts via next/font for better performance
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = constructMetadata({});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth", inter.variable, poppins.variable)}
    >
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-full mx-auto scroll-smooth",
          inter.className
        )}
      >
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            {children}
            <ThemeToggle />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
