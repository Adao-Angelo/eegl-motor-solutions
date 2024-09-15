import Image from "next/image";

export default function GestaoFrota() {
  return (
    <div className="flex  text-left text-c-background  bg-blue-800">
      <img className="w-[100%]" src="/frota.png" />
      <div className="">
        <div className="bg-gradient-red-2 min-h-[60%] p-[56px]">
          <h2 className="text-[62px] max-w-[620px] font-bold">
            Gestão Técnica de Frota
          </h2>
          <p className="text-[18px] font-bold">
            A gestão técnica envolve a administração completa dos equipamentos e
            máquinas do cliente. Garantimos a eficiência operacional por meio de
            monitoramento contínuo, manutenção preventiva e corretiva, e gestão
            estratégica. Asseguramos um funcionamento eficiente com alto
            desempenho.
          </p>
        </div>
        <div className="bg-c-dark-red min-h-[40%] p-[60px] text-center">
          <h2 className="text-[20px] mb-[40px]  font-black">
            Porque escolher a nossa gestão tecnica?
          </h2>
          <div className="flex justify-between text-left">
            <div className="max-w-[270px]">
              <h3 className="text-[18px] flex items-center gap-[10px] font-bold">
                <span className="w-[15px] block h-[15px] bg-c-background rounded-[20px]"></span>
                <p> Redução de Custos</p>
              </h3>
              <p className="text-[12px]">
                Minimiza paradas imprevistas e aumenta a produtividade.
              </p>
            </div>
            <div className="max-w-[270px]">
              <h3 className="text-[18px] flex items-center gap-[10px] font-bold">
                <span className="w-[15px] block h-[15px] bg-c-background rounded-[20px]"></span>
                <p> Eficiência Operacional</p>
              </h3>
              <p className="text-[12px]">
                Equipamentos sempre operando no máximo de sua capacidade e
                garantia de maior durabilidade das máquinas...
              </p>
            </div>
            <div className="max-w-[270px]">
              <h3 className="text-[18px] flex items-center gap-[10px] font-bold">
                <span className="w-[15px] block h-[15px] bg-c-background rounded-[20px]"></span>
                <p>Suporte Especializado</p>
              </h3>
              <p className="text-[12px]">
                Equipe técnica com conhecimento avançado sobre equipamentos
                pesados e sistemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
