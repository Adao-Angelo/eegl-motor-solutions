import Image from "next/image";
import Link from "next/link";

export default async function AreasOfActivity() {
  return (
    <main className="px-[140px] py-[50px] text-center text-c-text">
      <h1 className="bg-c-stand rounded-[29px] p-[17px] font-extrabold text-[30px] text-c-background">
        NOSSAS EMPRESAS
      </h1>
      <div className="flex gap-[50px] mx-auto my-[50px] w-[500px]">
        <Link href="/">
          <img
            className="w-full transition-all duration-500 hover:scale-110"
            src="/eegl.png"
            alt="eegl company"
          />
        </Link>

        <Link href="/">
          <img
            className="w-full transition-all duration-500 hover:scale-110"
            src="/agro.png"
            alt="eegl company"
          />
        </Link>

        <Link href="/solucoesMotoras">
          <img
            className="w-full transition-all duration-500 hover:scale-110"
            src="/motorSolutions.png"
            alt="eegl company"
          />
        </Link>
      </div>
      <p className="mb-[205px] text-[18px]">
        Clique no logotipo da empresa para mais informações!
      </p>
    </main>
  );
}
