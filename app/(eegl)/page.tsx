import SliderIllustrations from "@/components/Iillustrations";
import ProjectSlider from "@/components/projects";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const images = [
    "/partners/belo.png",
    "/partners/carrinho.png",
    "/partners/ferpinta.png",
    "/partners/prumo.png",
    "/partners/movicortes.png",
    "/partners/ffb.png",
    "/partners/LonAgro.png",
    "/partners/logo-prodel.png",
    "/partners/engconsult.png",
    "/partners/alcaal_angola.png",
  ];
  return (
    <main className="px-[140px] py-[50px] font-regular text-c-text mb-[250px]">
      <div className="mb-[100px]">
        <SliderIllustrations />
      </div>
      <div className="text-center">
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
      </div>
      <div className="flex items-center my-[80px] justify-between">
        <div>
          <img src="/persons.png" alt="/eelg equipe" />
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
      <div className="text-center my-[100px]">
        <h1 className="text-c-stand text-[30px] mb-[50px] font-extrabold">
          TRABALHOS REALIZADOS.
        </h1>
        <ProjectSlider />
      </div>
      <div className="text-center">
        <h1 className="bg-c-stand rounded-[29px] p-[17px] font-extrabold text-[30px] text-c-background">
          NOSSOS PARCEIROS
        </h1>
        <div className="overflow-hidden whitespace-nowrap mt-[100px]">
          <div className="marquee flex space-x-8 animate-marquee">
            {images.map((src, index) => (
              <div key={`${index}-${src}`}>
                <img
                  src={src}
                  alt={`image-${index}`}
                  className="w-[100%] h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
