export default function PecasAcessorios() {
  return (
    <div className="text-white text-left flex">
      <div>
        <div className="bg-gradient-red-2 min-h-[60%] p-[56px]">
          <h1 className="text-[62px] max-w-[620px] font-bold">
            Peças e acessórios
          </h1>
          <p className="text-[18px] font-bold">
            Fornecimento de peças e acessórios para atender às necessidades de
            manutenção e reparo de máquinas agrícolas, de construção,
            autocarros, entre outros. Garantimos a entrega rápida de peças de
            alta qualidade, que prolongam a vida útil de suas máquinas e
            asseguram o máximo desempenho.
          </p>
        </div>
        <div className="bg-c-background min-h-[20%] p-[24px] text-c-stand">
          <h1 className="text-[50px] max-w-[720px] font-bold">
            Soluções Personalizadas
          </h1>
        </div>
        <div className="bg-c-dark-red min-h-[20%] p-[60px] text-center">
          <div className="flex justify-between text-left">
            <div className="max-w-[270px]">
              <h3 className="text-[18px] flex items-center gap-[10px] font-bold">
                <span className="w-[15px] block h-[15px] bg-c-background rounded-[20px]"></span>
                <p> Peças genuínas</p>
              </h3>
            </div>
            <div className="max-w-[270px]">
              <h3 className="text-[18px] flex items-center gap-[10px] font-bold">
                <span className="w-[15px] block h-[15px] bg-c-background rounded-[20px]"></span>
                <p> Peças genuínas</p>
              </h3>
            </div>
            <div className="max-w-[270px]">
              <h3 className="text-[18px] flex items-center gap-[10px] font-bold">
                <span className="w-[15px] block h-[15px] bg-c-background rounded-[20px]"></span>
                <p>Peças genuínas</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <img className="object-cover h-full " src="/accessories.png" />
    </div>
  );
}
