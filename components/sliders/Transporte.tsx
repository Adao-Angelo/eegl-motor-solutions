export default function Transporte() {
  return (
    <div
      className="text-white text-left flex justify-between min-h-[700px] bg-gray-600"
      style={{ backgroundImage: `url(/container.png)` }}
    >
      {" "}
      <div></div>
      <div className="relative w-[60%] bg-gradient-red-2 py-[100px] px-[92px]">
        <h1 className="text-[62px]  font-bold">Transporte</h1>
        <p className="text-[18px] font-bold my-[42px]">
          Oferecemos um serviço completo e seguro de transporte de mercadorias,
          com foco em eficiência e pontualidade. Contamos com uma frota moderna
          e especializada para o transporte de diversos tipos de cargas, desde
          alimentos até materiais pesados, garantindo que sua mercadoria chegue
          ao destino com segurança e no prazo.
        </p>

        <div className="absolute left-[-10%]">
          <div className="relative w-[400px]">
            <div className="p-[32px] bg-c-background  text-c-black">
              <p className=" mb-[16px] font-bold text-[18px]">
                Segurança e Confiabilidade
              </p>
              <p className=" mb-[16px]  font-bold text-[18px]">
                Frota Modernizada
              </p>
              <p className="font-bold text-[18px]">Pontualidade</p>
            </div>
            <div className="absolute bottom-[-40px] right-[-40px]  bg-c-stand w-[80px] h-[80px] rounded-[50%]  border-c-background border-[14px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
