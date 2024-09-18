import SliderOurServices from "@/components/SliderOurServices";
import Image from "next/image";

export default function MotorSolutions() {
  return (
    <>
      <main className="bg-c-background">
        <section className="bg-solucoesFuturo bg-no-repeat bg-cover text-c-background flex justify-between pt-[178px] pb-[257px] pl-[72px] text-justify">
          <div className="w-[532px] ">
            <div>
              <h1 className="font-extrabold text-[40px]">Soluções agrícolas para um futuro sustentável!</h1>
              <p className="text-[16px] font-medium italic my-[22px]">Uma ampla gama de produtos agrícolas essenciais para o desenvolvimento de cultivos e a melhoria da produtividade no campo.</p>
            </div>
            <div className="py-[6px] w-[125px] text-c-black bg-c-background text-center font-regular text-[13px] rounded-[5px]">
              <p>Saber Mais...</p>
            </div>
          </div>
        </section>
        <div className="h-[66px] bg-gradient-red-3 -mt-2"></div>
        <section className="flex flex-col justify-center items-center pt-[93px] pb-[178px] px-[148px]">
          <div className="flex justify-between gap-[54px] mb-[92px]">
              <div>
                <h2 className="text-c-stand text-[50px] font-bold w-[285px]">Sobre Nós!</h2>
              </div>
              <div>
                <p className="text-[24px] font-medium text-justify">A <span className="font-extrabold text-c-stand"> EEGL Comércio e Serviços LDA</span>, oferecemos uma ampla gama de produtos agrícolas essenciais para o desenvolvimento de cultivos e a melhoria da produtividade no campo. Nosso portfólio inclui desde defensivos agrícolas de qualidade até insumos como gesso, calcário e adubos, garantindo suporte completo para o sucesso da sua lavoura.</p>
              </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-[36px] text-c-text mb-[35px]">Produtos Principais</h3>
            <div className="flex justify-between gap-8">
              <div className="w-[360px] py-[42px] px-9 bg-c-red-2 text-c-background">
                <h4 className="font-bold text-[24px] pb-[9px]">Gesso Agrícola</h4>
                <p className="font-semibold text-[15px]">
                Ideal para a correção de solos e o aumento da produtividade agrícola.
                </p>
              </div>
              <div className="w-[360px] py-[42px] px-9 bg-c-gray-0 text-c-black">
              <h4 className="font-bold text-[24px] pb-[9px]">Calcário Agrícola</h4>
                <p className="font-semibold text-[15px]">
                Solução essencial para equilibrar o pH do solo e melhorar o crescimento das plantas.
                </p>
              </div>
              <div className="w-[360px] py-[42px] px-9 bg-c-stand text-c-background">
              <h4 className="font-bold text-[24px] pb-[9px]">Adubo Agrícola</h4>
                <p className="font-semibold text-[15px]">
                Nutrientes completos para aumentar a colheita e garantir plantas saudáveis.
                </p>
              </div>
            </div>
            <p className="font-medium text-[24px] text-c-black text-justify mt-[35px]">
            Lorem ipsum dolor sit amet. Sed facere nisi hic quisquam deserunt est soluta veritatis eum ullam illo est dolorem omnis et iure facilis a deleniti iure! At dolorum expedita ab soluta soluta eum deserunt odit et optio voluptatem et placeat rerum ut odio harum!
            </p>
          </div>
        </section>
        <div className="h-[111px] bg-gradient-red-3 -mt-2"></div>
        <section className="flex justify-between gap-[53px] pt-[92px] px-[107px]">
          <div>
            <div className="w-[470px] h-[592px] bg-c-gray-0"></div>
            <div className="flex items-center bg-c-red-3 font-bold text-[36px] w-[308px] h-[171px] text-center text-c-background -mt-[521px] ml-[221px]">
              <h3>Importação e Exportação</h3>
            </div>
          </div>
          <div className="text-c-black mb-[208px]">
            <h3 className="font-bold text-[36px]">
              O que fazemos
            </h3>
            <p className="font-medium text-[24px] text-justify">
            Somos especialistas na logística agrícola, importando e exportando mercadorias para diversos mercados, conectando os melhores fornecedores e produtores globais.
            </p>
          </div>
        </section>
        <div className="h-[138px] bg-gradient-red-3 -mt-2"></div>
        <section className="flex justify-between gap-[50px] pt-[78px] pb-[65px] px-[130px]">
          <h2 className="font-bold text-[48px] text-c-red-3 w-[380px]">
          Depoimentos dos clientes
          </h2>
          <div className="flex justify-between gap-[35px]">
            <div className="flex flex-col items-center bg-gradient-gray px-5 rounded-[10px] text-c-black w-[237px]">
              <div className="w-[106px] h-[106px] bg-c-gray-3 rounded-full mt-[45px] mb-[29px]"></div>
              <p className="font-medium text-[12px] text-center mb-5">
                Lorem ipsum dolor sit amet. Et vero blanditiis id nisi voluptatem qui odit placeat aut obcaecati sint. Et distinctio culpa qui deserunt architecto qui reprehenderit neque in cumque consequuntur.
              </p>
              <h4 className="font-bold text-[16px] mb-[85px]">Geraldo António</h4>
            </div>
            <div className="flex flex-col items-center bg-gradient-gray px-5 rounded-[10px] text-c-black w-[237px]">
              <div className="w-[106px] h-[106px] bg-c-gray-3 rounded-full mt-[45px] mb-[29px]"></div>
              <p className="font-medium text-[12px] text-center mb-5">
                Lorem ipsum dolor sit amet. Et vero blanditiis id nisi voluptatem qui odit placeat aut obcaecati sint. Et distinctio culpa qui deserunt architecto qui reprehenderit neque in cumque consequuntur.
              </p>
              <h4 className="font-bold text-[16px] mb-[85px]">Geraldo António</h4>
            </div>
            <div className="flex flex-col items-center bg-gradient-gray px-5 rounded-[10px] text-c-black w-[237px]">
              <div className="w-[106px] h-[106px] bg-c-gray-3 rounded-full mt-[45px] mb-[29px]"></div>
              <p className="font-medium text-[12px] text-center mb-5">
                Lorem ipsum dolor sit amet. Et vero blanditiis id nisi voluptatem qui odit placeat aut obcaecati sint. Et distinctio culpa qui deserunt architecto qui reprehenderit neque in cumque consequuntur.
              </p>
              <h4 className="font-bold text-[16px] mb-[85px]">Geraldo António</h4>
            </div>
          </div>
        </section>
        <div className="h-[78px] bg-gradient-red-3 -mt-2"></div>     
      </main>
      <footer className="bg-solucoesFuturo bg-no-repeat bg-cover">
          <div className="flex justify-between text-c-background  bg-footerImageComercio w-full py-[97px] px-[180px]">
            <h2 className="text-[50px] leading-[64px] font-black mb-5">
              COMO PODEMOS AJUDAR?
            </h2>
            <form action="#">
              <div className="flex gap-[11px] mb-[15px]">
                <input
                  className="p-[16px] rounded-[10px]"
                  type=""
                  placeholder="Nome completo"
                />
                <input
                  className="p-[16px] rounded-[10px]"
                  type=""
                  placeholder="E-mail"
                />
              </div>
              <div className="flex gap-[11px] mb-[15px]">
                <input
                  className="p-[16px] rounded-[10px]"
                  type=""
                  placeholder="Numero de telefone"
                />
                <input
                  className="p-[16px] rounded-[10px]"
                  type=""
                  placeholder="Empresa (opcional)"
                />
              </div>
              <textarea
                className="w-[100%] p-[16px] rounded-[10px] min-h-[200px] mb-[24px]"
                placeholder="Como podemos ajudar?"
              ></textarea>
              <button
                className="p-[13px] w-[180px] border border-white text-c-background font-bold text-[20px] rounded-[10px] bg-gradient-red "
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>       
      </footer>
    </>  
  );
}
