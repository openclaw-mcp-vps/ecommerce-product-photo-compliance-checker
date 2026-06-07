import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhotoCheck – Product Photo Compliance Checker",
  description: "Scan product images for Amazon & eBay compliance issues instantly. AI-powered feedback for e-commerce sellers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="81017c05-1b5b-4be8-acb3-bcfbe19151e0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
