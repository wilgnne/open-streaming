import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Steaming",
  description: "A streaming application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "joy" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
