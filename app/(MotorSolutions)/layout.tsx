import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Motor Solutions",
  description: "Motor Solutions Sie of page",
};

export default function MotorSolutionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
