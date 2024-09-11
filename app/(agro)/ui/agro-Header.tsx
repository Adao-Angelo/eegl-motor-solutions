"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <section className="bg-c-green-0 p-5">
        <aside className="flex w-[450px] m-auto justify-between text-c-background">
          <div className="flex gap-2 ">
            <Mail />
            <p>geral@eeglgroup.ao</p>
          </div>
          <div className="flex gap-2">
            <Phone />
            <p> 929 029 456/929 029 342</p>
          </div>
        </aside>
      </section>
      <section className="header-container flex justify-between items-center px-[107px] py-6 mb-4">
        <aside className="logo">
          <img src="/logo.png" alt="Logo" className="w-[350px]" />
        </aside>
        <aside className="navBar flex gap-10">
          <div className="relative">
            <Link
              href="#"
              onClick={toggleMenu}
              className={`px-4 py-2 text-lg ${
                isOpen ? "font-bold text-c-stand" : "text-c-black"
              }`}
            >
              SOBRE NÓS
            </Link>

            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                <Link
                  href="/sobrenos"
                  className="block px-4 py-2 text-c-text text-[14px] hover:bg-gray-200"
                >
                  QUEM SOMOS
                </Link>
                <Link
                  href="/nossaEquipa"
                  className="block px-4 py-2 text-c-text text-[14px] hover:bg-gray-200"
                >
                  NOSSA EQUIPA
                </Link>
              </div>
            )}
          </div>
          <Link href="/areasdeatuacao" className="text-black text-lg">
            ÁREAS DE ATUAÇÃO
          </Link>
          <Link href="/" className="text-black text-lg">
            PORTOFOLIO
          </Link>
          <Link href="/" className="text-black text-lg">
            BLOG
          </Link>
          <Link href="/contactos" className="text-red-600 font-bold text-lg">
            CONTACTOS
          </Link>
        </aside>
      </section>
    </header>
  );
}
