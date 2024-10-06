"use client";

import { useEffect, useState, ReactNode } from "react";

interface MobileWarningProps {
  children: ReactNode;
}

const MobileWarning: React.FC<MobileWarningProps> = ({ children }) => {
  const [isMobileOrSmallScreen, setIsMobileOrSmallScreen] = useState(false);

  useEffect(() => {
    const checkDeviceAndViewport = () => {
      const userAgent =
        typeof window.navigator === "undefined" ? "" : navigator.userAgent;
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(userAgent);
      const isSmallScreen = window.innerWidth < 1000;
      setIsMobileOrSmallScreen(isMobileDevice || isSmallScreen);
    };

    checkDeviceAndViewport();
    window.addEventListener("resize", checkDeviceAndViewport);

    return () => {
      window.removeEventListener("resize", checkDeviceAndViewport);
    };
  }, []);

  return (
    <>
      {isMobileOrSmallScreen ? (
        <div className="flex justify-center items-center h-screen bg-red-500 p-[10px] text-white ">
          <div>
            <h1 className="text-2xl font-bold">
              Este site não está disponível para dispositivos móveis ou telas
              pequenas.
            </h1>
            <p className="mt-4">
              Nosso site está em atualização para dispositivos móveis. Por
              favor, para uma melhor experiência use um computador para acessar
              o nosso site.
            </p>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default MobileWarning;
