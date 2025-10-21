import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Your Name | Principal ML Engineer",
  description: "Principal Machine Learning Engineer with expertise in AI research and applied science. Author of multiple bestselling guides on ML careers, AI products, and professional development.",
  keywords: ["Machine Learning", "AI", "Principal Engineer", "ML Career", "AI Products", "Photography"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    title: "Your Name | Principal ML Engineer",
    description: "Principal Machine Learning Engineer with expertise in AI research and applied science.",
    siteName: "Your Name",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Principal ML Engineer",
    description: "Principal Machine Learning Engineer with expertise in AI research and applied science.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
