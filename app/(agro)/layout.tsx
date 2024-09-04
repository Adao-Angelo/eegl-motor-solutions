import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AGRICULTURE",
  description: "AGRICULTURE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body>{children}</body>
    </html>
  );
}
