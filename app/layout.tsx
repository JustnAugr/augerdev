import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/icon.png'
  },
  title: "auger.dev",
  description: "auger.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
