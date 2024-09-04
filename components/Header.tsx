import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default async function Header() {
  return (
    <header>
      <section className="bg-c-stand p-5">
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
          <Link href="/About" className="text-black text-lg">
            Sobre nós
          </Link>
          <Link href="/ourCompaniesPages" className="text-black text-lg">
            Áreas de atuação
          </Link>
          <Link href="/" className="text-black text-lg">
            Portfólio
          </Link>
          <Link href="/" className="text-black text-lg">
            Blog
          </Link>
          <Link href="/" className="text-red-600 font-bold text-lg">
            Contactos
          </Link>
        </aside>
      </section>
    </header>
  );
}
