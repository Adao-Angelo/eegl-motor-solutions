export default function AssistenciaTecnica() {
  return (
    <section className="flex gap-[15px] mb-24">
      <div className="bg-member-office w-[25%] h-[700px]"></div>
      <div className="bg-gradient-red-2 w-[75%] text-center p-[10px]">
        <h1 className="text-[40px] leading-[64px] font-bold mb-5 text-c-background mt-20">
          Assistência Técnica
        </h1>
        <p className="font-medium text-[18px] text-c-background w-[80%] m-auto mb-20">
          Fornecemos uma gama abrangente de serviços de assistência técnica
          ligeira, pesada e industrial. Nossa equipe está preparada para lidar
          com todas as suas necessidades, desde manutenção preventiva, corretiva
          à gestão completa de frota, garantindo o funcionamento eficiente e
          confiável dos seus equipamentos.
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
  );
}
