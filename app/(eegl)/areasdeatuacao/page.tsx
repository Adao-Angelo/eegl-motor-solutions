import Link from "next/link";

export default function AreasOfActivity() {
  return (
    <main className="px-[15px] md:px-[140px] py-[10px] md:py-[50px] font-regular mb-[250px] text-center text-c-text">
      <div className="text-center">
        <h1 className="bg-c-stand rounded-[29px] p-[10px] md:p-[17px] font-extrabold md:text-[30px] text-c-background">
          NOSSAS EMPRESAS
        </h1>
        <div className="flex  p-8 rounded  md:gap-[50px] items-center mx-auto my-[50px] md:w-[800px]">
          <Link href="/comercioEServicos">
            <img
              className="w-[70%] md:w-full transition-all duration-500 hover:scale-110"
              src="/eegl COMERCIO.png"
              alt="eegl company"
            />
          </Link>

          <Link href="/agro">
            <img
              className="w-[70%] md:w-full transition-all duration-500 hover:scale-110"
              src="/agro.png"
              alt="eegl company"
            />
          </Link>

          <Link href="/solucoesMotoras">
            <img
              className="w-[70%] md:w-full transition-all duration-500 hover:scale-110"
              src="/SO-MO.png"
              alt="eegl company"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
