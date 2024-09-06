export default function MotorSolutions() {
  return (
    <main className="bg-c-background">
      {/**__ Image of motor solutions ______________________________  */}
      <section className="relative">
        <img className="w-[100%]" src="/motor-solutions.png" />
        <div className="absolute rounded-[47px] h-[400px] p-[59px] w-[700px] top-[30%] left-[10%] inset-0 bg-gradient-to-r from-white/10 to-transparent">
          <h1 className="font-black italic text-c-background w-[580px] text-[46px]">
            Máxima eficiência & desempenho
          </h1>
          <div className="w-[150px] mt-[70px] rounded-[15px] p-5 bg-c-background"></div>
        </div>

        <img className="absolute top-0 right-0" src="/Image.png" />
      </section>

      {/**__ We take care of your engine __________________________________  */}
      <section className="flex p-[129px] justify-between items-center">
        <aside className="w-[534px] ">
          <h2 className="text-[60px] leading-[64px] font-bold mb-5 text-c-stand">
            Cuidamos do seu motor!
          </h2>
          <p className="text-[18px] font-medium">
            Oferecemos assistência técnica de alta qualidade, garantindo a
            máxima eficiência e desempenho dos seus equipamentos.
          </p>
          <div className="flex gap-3 mt-[35px]">
            <p className="font-bold text-[18px] p-[10px] rounded-[8px] text-c-background bg-gradient-red">
              Ligeiros
            </p>
            <p className="font-bold text-[18px] p-[10px] rounded-[8px] text-c-background bg-gradient-red">
              Pesados
            </p>
            <p className="font-bold text-[18px] p-[10px] rounded-[8px] text-c-background bg-gradient-red">
              Industrias
            </p>
          </div>
        </aside>
        <aside className="w-[600px]">
          <img className="w-[100%]" src="/motors.png" />
        </aside>
      </section>

      {/**__ More than 80 Satisfied Customers and 100 Successful Collaborations ____________________  */}
      <section className="bg-gradient-red-2 px-[247px] py-[54px] text-c-background flex justify-between">
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
      <section className="px-[200px] py-[90px] text-c-background text-center">
        <h1 className="text-[64px] font-bold text-c-stand">Nossos Serviços</h1>
        <div className="flex justify-between mt-[60px]">
          <p className="w-[220px] font-bold text-[14px] p-[15px] rounded-[8px] text-c-background bg-gradient-red">
            Assistência Técnica
          </p>
          <p className="w-[220px] font-bold text-[14px] p-[15px] rounded-[8px] text-c-background bg-c-black">
            Serralharia Industrial
          </p>
          <p className="w-[220px] font-bold text-[14px] p-[15px] rounded-[8px] text-c-background bg-c-black">
            Base de Vida
          </p>
          <p className="w-[220px] font-bold text-[14px] p-[5px] rounded-[8px] text-c-background bg-c-black">
            Desativação de ativos técnicos
          </p>
        </div>
      </section>

      {/**__ slide ____________________  */}
      <section className="flex gap-[15px] mb-24">
        <div className="bg-member-office w-[25%] h-[700px]"></div>
        <div className="bg-gradient-red-2 w-[75%] text-center p-[10px]">
          <h1 className="text-[40px] leading-[64px] font-bold mb-5 text-c-background mt-20">
            Assistência Técnica
          </h1>
          <p className="font-medium text-[18px] text-c-background w-[80%] m-auto mb-20">
            Fornecemos uma gama abrangente de serviços de assistência técnica
            ligeira, pesada e industrial. Nossa equipe está preparada para lidar
            com todas as suas necessidades, desde manutenção preventiva,
            corretiva à gestão completa de frota, garantindo o funcionamento
            eficiente e confiável dos seus equipamentos.
          </p>

          <div className="flex w-[80%] m-auto text-c-background">
            <div>
              <div
                className="bg-[url('/motor01.JPG')] bg-cover bg-center text- w-[250px] h-[180px] transform rotate-0"
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                }}
              ></div>
              <p className="font-bold text-left p-[20px] text-[18px]">
                Inspeção de equipamentos
              </p>
            </div>
            <div>
              <div
                className="bg-[url('/motor02.JPG')] bg-cover bg-center text- w-[250px] h-[180px] transform rotate-0"
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                }}
              ></div>
              <p className="font-bold text-left p-[20px] text-[18px]">
                Manutenção Preventiva
              </p>
            </div>

            <div>
              <div
                className="bg-[url('/motor03.JPG')] bg-cover bg-center text- w-[250px] h-[180px] transform rotate-0"
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                }}
              ></div>
              <p className="font-bold text-left p-[20px] text-[18px]">
                Manutenção Corretiva.
              </p>
            </div>
            <div>
              <div
                className="bg-[url('/motor04.JPG')] bg-cover bg-center text- w-[250px] h-[180px] transform rotate-0"
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                }}
              ></div>
              <p className="font-bold text-left p-[20px] text-[18px]">
                Reparação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/**__WHAT DO THEY SAY ABOUT US? ____________________  */}
      <section className="relative p-[100px] ">
        <div className="bg-c-gray-0 p-[68px] mb-[100px] ml-[40px] flex justify-between rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]">
          <div></div>
          <div>
            <h1 className="text-[50px] leading-[64px] mb-5 font-black text-c-text">
              O QUE DIZEM SOBRE NÓS?
            </h1>
            <div className="flex gap-6 w-[700px] rounded-tl-[75px] rounded-bl-[75px] bg-zinc-950 text-c-background items-center p-[10px]">
              <img
                className="w-[124px] h-[124px] rounded-[50%]"
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
      <footer className="bg-footerImage bg-cover px-[180px] py-[200px] text-c-background flex justify-between">
        <h1 className="text-[50px] leading-[64px] font-black mb-5">
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
      </footer>
    </main>
  );
}
