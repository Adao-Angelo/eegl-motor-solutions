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
      <section>
        <img className="w-[100%]" src="/motor-solutions.png" />
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
    </main>
  );
}
