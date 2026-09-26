import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/providers";
import { ContactBubble } from "@/components/navigation";
import { CustomCursor } from "@/components/ui";
import { PageTransition } from "@/components/animations";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-foreground">
        <SmoothScrollProvider>
          <CustomCursor />
          <ContactBubble />
          <PageTransition>
            <div className="flex-1 flex flex-col">{children}</div>
          </PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
