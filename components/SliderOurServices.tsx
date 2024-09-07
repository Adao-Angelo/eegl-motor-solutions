"use client";

import { useState } from "react";
import AssistenciaTecnica from "./sliders/AssistenciaTecnica";
import GestaoFrota from "./sliders/GestaoFrota";
import PecasAcessorios from "./sliders/PecasAcessorios";
import Transporte from "./sliders/Transporte";
import ImportacaoExportacao from "./sliders/ImportacaoExportacao";

const services = [
  { id: 1, title: "Assistência Técnica" },
  { id: 2, title: "Gestão Técnica de Frota" },
  { id: 3, title: "Peças e Acessórios" },
  { id: 4, title: "Transporte" },
  { id: 5, title: "Importação e Exportação" },
];

export default function SliderOurServices() {
  const [activeService, setActiveService] = useState<number | null>(1);

  const renderActiveComponent = () => {
    switch (activeService) {
      case 1:
        return <AssistenciaTecnica />;
      case 2:
        return <GestaoFrota />;
      case 3:
        return <PecasAcessorios />;
      case 4:
        return <Transporte />;
      case 5:
        return <ImportacaoExportacao />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen my-[100px] bg-c-background text-center py-10">
      <h1 className="text-[62px] font-bold text-c-stand  mb-8">
        Nossos Serviços
      </h1>

      <div className="flex justify-center space-x-4 mt-[60px] mb-[89px]">
        {services.map((service) => (
          <button
            key={`${service.id}-${service.title}`}
            onClick={() => setActiveService(service.id)}
            className={`p-[18px] font-bold rounded-[8px] ${
              activeService === service.id
                ? "bg-gradient-red text-c-background"
                : "bg-c-black text-c-background"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className="relative h-[800px]  overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-full h-full transform transition-transform duration-500 ${
            activeService ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
}
