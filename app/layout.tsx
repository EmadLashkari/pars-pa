import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/fonts";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "پارس پا",
  description:
    "ما با بهره‌گیری از هوش مصنوعی و مشاوره تخصصی فیزیوتراپیست‌ها، پاهای شما را به صورت رایگان آنالیز می‌کنیم و شما را نسبت به وضعیت کف پایتان آگاه میکنیم. همچنین در صورت نیاز، با استفاده از دستگاه‌های پیشرفته و هوشمند، کفی‌های مخصوص هر پای شما طراحی و تولید میکنیم.",
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
