"use client";

import { Mail, Map, Phone } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

interface IText {
  name: string;
  value: string;
}

const texts: IText[] = [
  {
    name: "mission",
    value:
      "Proporcionar soluções integradas de alta qualidade, impulsionando o sucesso empresarial e contribuindo para o desenvolvimento sustentável. ",
  },
  {
    name: "values",
    value: ` Excelência: buscamos continuamente a excelência em produtos e serviços. 

      Inovação: buscamos maneiras novas e eficientes de atender às necessidades dos clientes.
      
      Colaboração: promovendo um ambiente de trabalho que incentiva o compartilhamento de ideias e a cooperação para alcançar objetivos comuns.`,
  },
  {
    name: "vision",
    value:
      "Buscamos ser referência nos setores em que atuamos, alinhando crescimento econômico com responsabilidade social e ambiental. ",
  },
];
export default function AboutUs() {
  const [textRender, setTextRender] = useState<string>();
  const [selectedText, setSelectedText] = useState<string>("mission");
  function handlerTextRender() {
    const text: IText | undefined = texts.find(
      (text) => text.name === selectedText
    );
    setTextRender(text?.value);
  }
  useEffect(() => {
    handlerTextRender();
  }, [selectedText]);
  return (
    <main className="px-[15px] md:px-[140px] py-[10px] md:py-[50px]">
      <section className="md:flex items-center justify-between ">
        <img
          src="/aboutImage.png"
          className="w-[600px]"
          alt="Funcionários da EEGL GROUP"
        />
        <div>
          <h1 className="font-extrabold text-[25px] md:text-[30px]  text-c-text ">
            <span className="text-c-stand">SOBRE</span> A EEGL GROUP
          </h1>
          <div className="mb-[25px] font-medium  text-[18px]">
            <p className="mb-[28px]">
              Desde <span className="text-c-stand"> 2015 </span> no mercado,
              somos uma marca angolana comprometida em oferecer soluções
              personalizadas e garantir a satisfação do cliente. Nossa equipe
              qualificada está pronta para atender às necessidades do mercado e
              superar expectativas.
            </p>
            <p>
              Nosso compromisso é com a excelência, inovação e a construção de
              parcerias duradouras. Buscamos constantemente aprimorar os nossos
              serviços e produtos para oferecer as melhores soluções aos nossos
              clientes e contribuir para o desenvolvimento econômico de Angola.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center w-[100%] md:items-end p-[30px] rounded-[30px] h-[300px] my-[70px] inset-0 bg-gradient-to-b from-c-gray-0/50 to-transparent">
        <div className="absolute top-[-25px] full flex mt-0 mx-0 mb-[38px] md:gap-[5.5rem] gap-1">
          <button
            onClick={() => {
              setSelectedText("mission");
            }}
            className={`border-none text-[16px] rounded-[1rem] py-[12px] px-[37px]  ${
              selectedText === "mission"
                ? "font-bold  bg-c-stand text-c-background "
                : "text-c-text bg-c-gray-0"
            }`}
          >
            Missão
          </button>
          <button
            onClick={() => {
              setSelectedText("vision");
            }}
            className={`border-none text-[16px] rounded-[1rem] py-[12px] px-[37px] ${
              selectedText === "vision"
                ? "font-bold  bg-c-stand text-c-background "
                : "text-c-text bg-c-gray-0"
            }`}
          >
            Visão
          </button>
          <button
            onClick={() => {
              setSelectedText("values");
            }}
            className={`border-none text-[16px] rounded-[1rem] py-[12px] px-[37px]  ${
              selectedText === "values"
                ? "font-bold  bg-c-stand text-c-background "
                : "text-c-text bg-c-gray-0"
            }`}
          >
            Valores
          </button>
        </div>
        <div>
          <p className="p-[20px] text-[18px]">{textRender}</p>
        </div>
      </section>
      <section className="md:flex justify-center items-center mb-[120px]">
        <div className="py-0 pr-[76px] pl-[10px]">
          <h2 className="font-extrabold text-c- text-[30px]">
            <span className="text-c-stand">ONDE</span> ESTAMOS?
          </h2>
          <div>
            <h3 className="font-bold text-[18px] text-c-stand mt-[18px]">
              Sede:
            </h3>
            <div>
              <div className=" flex items-center gap-[1.5rem]">
                <Map className="text-[16px] text-c-text" />
                <p className="text-[16px] text-c-text max-w-[350px]">
                  <span className="font-bold text-[16px] text-c-text">
                    Luanda, Viana-Km25,
                  </span>
                  ponte do 25 sentido Cacuaco
                </p>
              </div>
              <div>
                <p className="text-[16px] text-c-text ml-[20px] mb-[47px]">
                  Bairro
                  <span className="font-bold">Canjinji, Placa 80</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[20px] text-c-stand">Contactos:</h3>
            <div>
              <div className="flex items-center gap-[15px]">
                <Phone className="text-[16px] text-c-text" />
                <p>(+244) 929 029 456/ 929 029 342</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <Mail className="text-[16px] text-c-text" />
                <p>geral@eeglgroup.ao</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[665px] md:mt-0 mt-4 h-[330px]">
          <iframe
            className="w-full h-full rounded-[10px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1405.1617899997977!2d13.434183213967485!3d-8.91931376326605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f94e72440869%3A0x8d19eecd15fe0d20!2sSOLU%C3%87%C3%95ES%20MOTORAS%20LDA.!5e0!3m2!1spt-PT!2sao!4v1724344575928!5m2!1spt-PT!2sao"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
