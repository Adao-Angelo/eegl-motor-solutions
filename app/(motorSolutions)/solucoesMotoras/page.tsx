import { Phone, Mail } from "lucide-react";

export default function MotorSolutions() {
  return (
    <main className="bg-cb">
      <section className="bg-cd p-5">
        <aside className="flex w-[450px] m-auto justify-between text-cb">
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

      {/**__ Image of motor solutions ______________________________  */}
      <section className="relative">
        <img className="w-[100%]" src="/motor-solutions.png" />
        <img className="absolute top-0 right-0" src="/Image.png" />
      </section>

      {/**__ We take care of your engine __________________________________  */}
      <section className="flex p-[129px] justify-between items-center">
        <aside className="w-[534px] ">
          <h2 className="text-[60px] leading-[64px] font-bold mb-5 text-cd  ">
            Cuidamos do seu motor!
          </h2>
          <p className="text-[18px] font-medium">
            Oferecemos assistência técnica de alta qualidade, garantindo a
            máxima eficiência e desempenho dos seus equipamentos.
          </p>
          <div className="flex gap-3 mt-[35px]">
            <p className="font-bold text-[18px] p-[10px]  rounded-[8px] text-cb bg-gradient-red">
              Ligeiros
            </p>
            <p className="font-bold text-[18px] p-[10px] rounded-[8px] text-cb bg-gradient-red">
              Pesados
            </p>
            <p className="font-bold text-[18px] p-[10px] rounded-[8px] text-cb bg-gradient-red">
              Industrias
            </p>
          </div>
        </aside>
        <aside className="w-[600px]">
          <img className="w-[100%]" src="/motors.png" />
        </aside>
      </section>

      {/**__ More than 80 Satisfied Customers and 100 Successful Collaborations ____________________  */}
      <section className="bg-gradient-red-2 px-[247px] py-[54px] text-cb flex justify-between">
        <div className="text-center">
          <h1 className="font-black text-[64px]">+80</h1>
          <p className="text-center text-[20px]">Clientes satisfeitos</p>
        </div>
        <div className="text-center">
          <h1 className="font-black text-[64px]">+100</h1>
          <p className="text-center text-[20px]">Colaborações de sucesso</p>
        </div>
        <div className="text-center">
          <h1 className="font-black text-[64px]">+80</h1>
          <p className="text-center text-[20px]">Projetos realizados</p>
        </div>
      </section>

      {/**__ Our Services ____________________  */}
      <section className="px-[200px] py-[90px] text-cb text-center">
        <h1 className="text-[60px] font-bold text-cd">Nossos Serviços</h1>
        <div className="flex justify-between mt-[60px]">
          <p className="w-[220px]  font-bold text-[14px] p-[15px]  rounded-[8px] text-cb bg-gradient-red">
            Assistência Técnica
          </p>
          <p className="w-[220px]  font-bold text-[14px] p-[15px]  rounded-[8px] text-cb  bg-c-black">
            Serralharia Industrial
          </p>
          <p className="w-[220px]  font-bold text-[14px] p-[15px]  rounded-[8px] text-cb  bg-c-black">
            Base de Vida
          </p>
          <p className="w-[220px] font-bold text-[14px] p-[5px]  rounded-[8px] text-cb bg-c-black">
            Desativação de ativos técnicos
          </p>
        </div>
      </section>

      {/**__ slide ____________________  */}
      <section className="flex gap-[15px] mb-24">
        <div className="bg-member-office w-[30%] h-[600px]"></div>
        <div className="bg-gradient-red-2 w-[70%] text-center p-[10px]">
          <h1 className="text-[40px] leading-[64px] font-bold mb-5 text-cb mt-20 ">
            Assistência Técnica
          </h1>
          <p className="font-medium text-[16px] text-cb w-[80%] m-auto mb-20">
            Fornecemos uma gama abrangente de serviços de assistência técnica
            ligeira, pesada e industrial. Nossa equipe está preparada para lidar
            com todas as suas necessidades, desde manutenção preventiva,
            corretiva à gestão completa de frota, garantindo o funcionamento
            eficiente e confiável dos seus equipamentos.
          </p>

          <div className="flex w-[80%] m-auto">
            <div
              className="bg-white w-[300px] h-[150px] transform rotate-0"
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            >
              {/* Conteúdo da sua div */}
            </div>
            <div
              className="bg-white w-[300px] h-[150px] transform rotate-0"
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            >
              {/* Conteúdo da sua div */}
            </div>
            <div
              className="bg-white w-[300px] h-[150px] transform rotate-0"
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            >
              {/* Conteúdo da sua div */}
            </div>
            <div
              className="bg-white w-[300px] h-[150px] transform rotate-0"
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            >
              {/* Conteúdo da sua div */}
            </div>
          </div>
        </div>
      </section>

      {/**__WHAT DO THEY SAY ABOUT US? ____________________  */}

      <section className="relative p-[100px] ">
        <div className="bg-cg p-[68px] mb-[100px] ml-[40px] flex justify-between rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]  ">
          <div></div>
          <div>
            <h1 className="text-[40px] leading-[64px] mb-5 font-bold text-ct">
              O QUE DIZEM SOBRE NÓS?
            </h1>
            <div className="flex gap-6 w-[700px] rounded-tl-[75px] rounded-bl-[75px] bg-zinc-950 text-cb items-center p-[10px]">
              <img
                className="w-[124px] h-[124px]  rounded-[50%]"
                src="/motor-solutions.png"
              />

              <div>
                <p>JAIRO MOREIRA</p>
                <p className="text-[13px] mb-5">
                  A equipe mostrou grande conhecimento técnico e utilizou peças
                  de alta qualidade. Recomendo para qualquer necessidade de
                  assistência técnica em veículos pesados. Certamente voltarei a
                  utilizar seus serviços.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="absolute bottom-0 left-0" src="/member.png" />
      </section>

      {/**__ footer ____________________  */}
      <footer className="bg-footerImage px-[180px] py-[200px] text-cb flex justify-between">
        <h1 className="text-[50px] leading-[64px] font-bold mb-5">
          COMO PODEMOS AJUDAR?
        </h1>
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
              placeholder="Escolha o serviço"
            />
          </div>
          <div>
            <textarea
              name="help-text"
              id="help"
              className="w-[100%] rounded-[10px] min-h-[150px] p-[10px]"
              placeholder="Como podemos Ajudar?"
            ></textarea>
          </div>
          <button
            className="bg-cd p-[13px] text-[20px] font-black rounded-[10px] mt-2 border-2 border-cb hover:bg-red-800"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </footer>
    </main>
  );
}
