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

      {/**__ We take care of your engine __________________________________  */}
    </main>
  );
}
