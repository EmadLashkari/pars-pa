import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/fonts";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "پارس پا",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={poppins.className}>{children}</body>
      </Suspense>
    </html>
  );
}
