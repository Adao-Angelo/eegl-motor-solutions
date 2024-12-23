import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Phone } from "lucide-react";
import Link from "next/link";
import Header from "./ui/agro-Header";
import MobileWarning from "@/components/ui/MobileWarning";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
      <body
        className={`bg-background-project bg-cover ${montserrat.className}`}
      >
        <Header></Header>
        <MobileWarning>{children}</MobileWarning>

        <footer>
          <div className="bg-c-gray-2 pt-24 pb-[30px] ">
            <div className="nav flex justify-between w-[701px] mx-auto">
              <Link href="/" className="text-c-background text-lg">
                HOME
              </Link>
              <Link href="/sobrenos" className="text-white text-lg">
                SOBRE NÓS
              </Link>
              <Link href="/areasdeatuacao" className="text-white text-lg">
                ÁREAS DE ATUAÇÃO
              </Link>
              <Link href="/portfólio" className="text-white text-lg">
                PORTOFOLIO
              </Link>
              <Link href="/blog" className="text-white text-lg">
                BLOG
              </Link>
            </div>
            <div className="text-center mt-[40px]">
              <p className="text-c-background">
                <span className="font-bold">SEDE:</span> Luanda, Viana-Km25,
                ponte do 25 sentido Cacuaco, Bairro Canjinji, Placa 80
              </p>
            </div>
          </div>
          <aside className="bg-c-green-2 rounded-lg p-[37px]  max-w-[889px] mx-auto -mt-[280px] text-white">
            <div className="flex items-center gap-3 m-auto justify-center max-w-[900px]">
              <p className="text-2xl">Como podemos ajudar?</p>
              <button className="flex items-center gap-3 bg-white text-gray-800 rounded-lg p-3 cursor-pointer">
                <Phone />
                <p className="text-sm font-bold">Ligue já</p>
              </button>
              <p className="text-base font-bold">
                (+244) 929 029 456 / 929 029 342
              </p>
            </div>
          </aside>
        </footer>
      </body>
    </html>
  );
}
