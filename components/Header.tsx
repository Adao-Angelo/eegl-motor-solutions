"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Top bar with email and phone */}
      <section className="bg-c-stand p-2 md:p-5">
        <aside className="flex md:w-[450px] m-auto justify-between text-c-background md:text-[16px] text-[12px]">
          <div className="flex gap-2">
            <Mail />
            <p>geral@eeglgroup.ao</p>
          </div>
          <div className="flex gap-2">
            <Phone />
            <p>929 029 456/929 029 342</p>
          </div>
        </aside>
      </section>

      {/* Main header section */}
      <section className="header-container flex justify-between items-center px-[15px] md:px-[107px] py-6 mb-4">
        <div></div>
        {/* Logo: hidden on mobile, shown on tablets and desktops */}
        <aside className="logo hidden md:block">
          <img src="/eeglgroup.png" alt="Logo" className="w-[350px]" />
        </aside>

        {/* Desktop navbar */}
        <aside className="hidden md:flex gap-10">
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
          <Link href="/portofolio" className="text-black text-lg">
            PORTOFOLIO
          </Link>
          <Link href="/blog" className="text-black text-lg">
            BLOG
          </Link>
          <Link href="/contactos" className="text-red-600 font-bold text-lg">
            CONTACTOS
          </Link>
        </aside>

        {/* Mobile/Tablet menu icon */}
        <aside className="md:hidden flex items-cente">
          <button onClick={toggleMobileMenu}>
            <Menu className="w-8 h-8 text-c-stand" />
          </button>
        </aside>
      </section>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <section className="flex flex-col items-center bg-white shadow-md md:hidden">
          <Link href="/" className="py-2 text-lg text-c-black">
            SOBRE NÓS
          </Link>
          <Link href="/areasdeatuacao" className="py-2 text-lg text-c-black">
            ÁREAS DE ATUAÇÃO
          </Link>
          <Link href="/" className="py-2 text-lg text-c-black">
            PORTOFOLIO
          </Link>
          <Link href="/" className="py-2 text-lg text-c-black">
            BLOG
          </Link>
          <Link
            href="/contactos"
            className="py-2 text-lg text-red-600 font-bold"
          >
            CONTACTOS
          </Link>
        </section>
      )}
    </header>
  );
}
