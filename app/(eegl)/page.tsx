import Link from "next/link";

export default function Home() {
  return (
    <main className="px-[140px] py-[50px] font-regular text-c-text mb-[250px]">
      <div className="text-center">
        <h1 className="bg-c-stand rounded-[29px] p-[17px] font-extrabold text-[30px] text-c-background">
          NOSSAS EMPRESAS
        </h1>
        <div className="flex gap-[50px] mx-auto my-[50px] w-[500px]">
          <Link href="/">
            <img src="/eegl.png" alt="eegl company" />
          </Link>

          <Link href="/">
            <img src="/agro.png" alt="eegl company" />
          </Link>

          <Link href="/solucoesMotoras">
            <img src="/motorSolutions.png" alt="eegl company" />
          </Link>
        </div>
      </div>
      <div className="flex items-center my-[100px] justify-between">
        <div>
          <img src="/persons.png" />
        </div>
        <div className="w-[50%]">
          <h1 className="font-extrabold text-[30px]">
            <span className="text-c-stand">SOBRE</span> A EEGL GROUP
          </h1>
          <p className="my-[31px]">
            A <span className="font-bold">EEGL GROUP </span> é uma marca
            angolana comprometida em oferecer soluções personalizadas e garantir
            a satisfação do cliente. Nossa equipe qualificada está pronta para
            atender às necessidades do mercado e superar expectativas.
          </p>
          <Link
            className="bg-c-text font-extrabold p-[12px] text-c-background rounded-[10px] block w-[150px]"
            href="/sobrenos"
          >
            Saber mais...
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-c-stand text-[30px] font-extrabold">
          TRABALHOS REALIZADOS
        </h1>
      </div>
    </main>
  );
}
