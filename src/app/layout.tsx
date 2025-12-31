import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";
import { Inter, Poppins } from "next/font/google";

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
