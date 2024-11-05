import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Phone } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "EEGL",
  description: "Motor Solutions Sie of page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body className={`bg-background-project ${montserrat.className}`}>
        <Header></Header>
        {children}
        <footer>
          <div className="bg-c-gray-2 pt-24 pb-[30px] ">
            <div className="nav sm:flex hidden justify-between w-[701px] mx-auto">
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
            <div className="text-center mt-[40px] p-2">
              <p className="text-c-background">
                <span className="font-bold">SEDE:</span> Luanda, Viana-Km25,
                ponte do 25 sentido Cacuaco, Bairro Canjinji, Placa 80
              </p>
            </div>
          </div>
          <aside className="bg-c-stand rounded-lg p-[37px]   max-w-[889px] mx-auto -mt-[280px] text-white">
            <div className="flex items-center gap-3 m-auto justify-center max-w-[900px]">
              <p className="sm:text-2xl  text-[10px]">Como podemos ajudar?</p>
              <button className="flex items-center gap-3 bg-white text-gray-800 rounded-lg p-1 sm:p-3 cursor-pointer">
                <Phone />
                <p className="sm:text-sm text-[10px] font-bold">Ligue já</p>
              </button>
              <p className="text-base  sm:text-[18px] text-[10px] font-bold">
                (+244) 929 029 456 / 929 029 342
              </p>
            </div>
          </aside>
        </footer>
      </body>
    </html>
  );
}
