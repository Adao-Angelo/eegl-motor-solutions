export default function ImportacaoExportacao() {
  return (
    <div
      style={{ backgroundImage: `url(/container-harbor.png)` }}
      className="h-[800px] bg-cover pt-[100px] pl-[400px]"
    >
      <div className=" relative bg-gradient-red-2  w-[600px] text-left m-auto p-[64px] text-c-background">
        <div>
          <h1 className="text-[62px] max-w-[620px] font-bold">
            Importação e exportação
          </h1>
          <p className="text-[18px] font-bold">
            Oferecemos soluções completas e eficientes para a importação e
            exportação de mercadorias, facilitando o comércio internacional para
            empresas de diversos setores.
          </p>

          <p className="text-[18px]  my-[15px] font-bold">
            Garantimos que seus produtos cruzem fronteiras de maneira segura e
            sem complicações.
          </p>
        </div>
        <div className="absolute bottom-[-60px] left-[-60px]  bg-c-stand w-[140px] h-[140px] rounded-[50%]  border-c-background border-[30px]"></div>
      </div>
    </div>
  );
}
