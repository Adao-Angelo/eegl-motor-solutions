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
              src="/work01.jpeg"
            />
            <p className="text-[22px] mt-[20px]">
              Gouveia <span className="font-bold">Leite</span>
            </p>
            <p className="text-[14px]">Director Gera</p>
          </div>
          <div className="text-center w-[183px]">
            <img className="rounded-[50%] w-[100%] h-[183px]" src="/1.jpeg" />
            <p className="text-[22px] mt-[20px]">
              Gouveia <span className="font-bold">Leite</span>
            </p>
            <p className="text-[14px]">Director Gera</p>
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
            <img className="rounded-[50%] w-[100%] h-[183px]" src="/1.jpeg" />
            <p className="text-[22px] mt-[20px]">
              Gouveia <span className="font-bold">Leite</span>
            </p>
            <p className="text-[14px]">Director Gera</p>
          </div>
          <div className="text-center w-[183px]">
            <img className="rounded-[50%] w-[100%] h-[183px]" src="/1.jpeg" />
            <p className="text-[22px] mt-[20px]">
              Gouveia <span className="font-bold">Leite</span>
            </p>
            <p className="text-[14px]">Director Gera</p>
          </div>
          <div className="text-center w-[183px]">
            <img className="rounded-[50%] w-[100%] h-[183px]" src="/1.jpeg" />
            <p className="text-[22px] mt-[20px]">
              Gouveia <span className="font-bold">Leite</span>
            </p>
            <p className="text-[14px]">Director Gera</p>
          </div>
          <div className="text-center w-[183px]">
            <img className="rounded-[50%] w-[100%] h-[183px]" src="/1.jpeg" />
            <p className="text-[22px] mt-[20px]">
              Gouveia <span className="font-bold">Leite</span>
            </p>
            <p className="text-[14px]">Director Gera</p>
          </div>
        </div>
      </div>
    </main>
  );
}
