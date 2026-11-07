import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
export const metadata: Metadata = {
  title: "Island Snow",
  description: "Island Snow React Mockup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}