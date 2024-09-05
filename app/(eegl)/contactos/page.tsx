import { LocateIcon, Mail, MapPinned, Phone } from "lucide-react";

export default async function Contacts() {
  return (
    <main className="px-[140px] py-[50px] font-regular">
      <div className="flex items-end gap-[20%]">
        <div>
          <h1 className="font-extrabold  text-[30px] text-c-black">
            <span className="font-extrabold text-c-stand">ONDE</span> ESTAMOS ?
          </h1>
          <p className="text-c-stand font-bold text-[18px]">Sede:</p>
          <div className="flex gap-[14px]">
            <MapPinned />
            <p className="w-[296px]">
              <span className="font-bold"> Luanda, Viana-Km25,</span> ponte do
              25 sentido Cacuaco Bairro
              <span className="font-bold">Canjinji, Placa 80</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-c-stand font-bold text-[18px]">Contactos</p>
          <div className="flex gap-[12px] my-[8px]">
            <Phone /> <p>(+244) 929 029 456/ 929 029 342</p>
          </div>
          <div className="flex gap-[12px]">
            <Mail /> <p>geral@eeglgroup.ao</p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-c-gray-0 h-[400px] mt-[60px] mb-[300px] rounded-[10px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126139.09948596157!2d13.24979588906248!3d-8.893826457718937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f9006b6f9e39%3A0x103a32e3e0c588f2!2sEeglgroup!5e0!3m2!1spt-PT!2sao!4v1725568625140!5m2!1spt-PT!2sao"
          width="600"
          height="400"
          className="w-[100%] rounded-[10px]"
          title="Google Maps"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}
