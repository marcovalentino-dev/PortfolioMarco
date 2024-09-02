import RenderModel from "./components/RenderModel";
import MarcoAvatar from "./components/models/MarcoAvatar";
import Navigation from "./components/navigation";
import { LuAppWindow } from "react-icons/lu"; // Assicurati di installare react-icons

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between">
      {/* Video di Sfondo */}
      <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover -z-10 opacity-60"
            preload="auto"
          >
            <source src="/background/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

      {/* Contenuto Sovrapposto */}
      <div className="absolute top-0 w-full flex flex-col items-center justify-center -z-20 text-center mt-5">
        <h1 className="text-white text-5xl font-serif"></h1>
      </div>

      {/* Riquadro grafico con icona e testo */}
      <div className="absolute left-8 top-20 -z-10 flex flex-col items-start space-y-4 sm:left-4 sm:top-10 md:left-6 md:top-12">
        <div className="flex items-center border-2 border-blue-200 bg-transparent text-white text-lg font-semibold p-1 rounded-lg shadow-lg">
          <LuAppWindow className="text-2xl mr-3" />
          <span className="text-lg sm:text-sm">Developer Portfolio</span>
        </div>
        
        {/* Testo con gradiente */}
        <h2 className="text-6xl font-serif bold sm:text-4xl md:text-5xl">
          Hi, I&apos;m <span className="text-6xl font-serif italic bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent sm:text-4xl md:text-5xl"> Marco</span>
        </h2>
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-center z-20">
        {/* Navigation e Modello 3D */}
        <Navigation />
        <RenderModel>
          <MarcoAvatar />
        </RenderModel>
      </div>
    </main>
  );
}
