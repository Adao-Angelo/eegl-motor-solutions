import Image from "next/image";

export default async function OurEquip() {
  return (
    <main className="px-[140px] py-[50px] font-regular text-c-text mb-[250px]">
      <h1 className="text-c-text text-[30px] font-extrabold mb-[48px]">
        <span className="text-c-stand">NOSSA</span> EQUIPA
      </h1>
      {/*_________ Area Administrative ________ */}
      <div className="flex items-center gap-[40px]">
        <div className="text-[18px] w-[178px] border-b-2 border-c-stand">
          Área Administrativa
        </div>
        <div className="flex gap-[66px]">
          <div className="text-center w-[183px]">
            <img
              className="rounded-[50%] w-[100%] h-[183px]"
              src="/members/gouveia.jpg"
              alt="/work"
            />
            <p className="text-[22px] mt-[20px]">
              Gouveia <span className="font-bold">Leite</span>
            </p>
            <p className="text-[14px]">Director Geral</p>
          </div>
          <div className="text-center w-[183px]">
            <img
              alt="image"
              className="rounded-[50%] w-[100%] h-[183px]"
              src="/no-profile.jpeg"
            />
            <p className="text-[22px] mt-[20px]">
              Paulo <span className="font-bold">Januário</span>
            </p>
            <p className="text-[14px]">Director Administrativo</p>
          </div>
        </div>
      </div>

      {/*_________ Technical Area  ________ */}
      <div className="flex items-center gap-[40px] mt-[103px]">
        <div className="text-[18px] border-b-2 border-c-stand">
          <p>Área Técnicas</p>
        </div>
        <div className="flex gap-[66px]">
          <div className="text-center w-[183px]">
            <img
              alt="member"
              className="rounded-[50%] w-[100%] h-[183px]"
              src="/no-profile.jpeg"
            />
            <p className="text-[22px] mt-[20px]">
              Abreu <span className="font-bold"> Dos anjos</span>
            </p>
            <p className="text-[14px]">Director Gera</p>
          </div>
          <div className="text-center w-[183px]">
            <img
              alt="member"
              className="rounded-[50%] w-[100%] h-[183px]"
              src="/no-profile.jpeg"
            />
            <p className="text-[22px] mt-[20px]">
              Gouveia <span className="font-bold">Leite</span>
            </p>
            <p className="text-[14px]">Director Gera</p>
          </div>
          <div className="text-center w-[183px]">
            <img
              alt="member"
              className="rounded-[50%] w-[100%] h-[183px]"
              src="/members/edson.jpg"
            />
            <p className="text-[22px] mt-[20px]">
              Edson <span className="font-bold">Guerra</span>
            </p>
            <p className="text-[14px]">Tecnico junior</p>
          </div>
          {/* <div className="text-center w-[183px]">
            <img
              alt="member"
              className="rounded-[50%] w-[100%] h-[183px]"
              src="/no-profile.jpeg"
            />
            <p className="text-[22px] mt-[20px]">
              Gouveia <span className="font-bold">Leite</span>
            </p>
            <p className="text-[14px]">Director Gera</p>
          </div> */}
        </div>
      </div>
    </main>
  );
}
