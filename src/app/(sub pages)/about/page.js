import AboutDetails from "@/app/components/about";
import RenderModel from "../../components/RenderModel";
import dynamic from "next/dynamic";
const MarcoAvatarAbout = dynamic(() => import("../../components/models/MarcoAvatarAbout"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      {/* Video di Sfondo */}
      <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover -z-10 opacity-60"
          >
            <source src="/background/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-3/5 xs:h-3/4 sm:h-screen flex justify-center items-center z-10">
          <RenderModel>
            <MarcoAvatarAbout />
          </RenderModel>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center mt-6 sm:mt-0">
          <div className="absolute flex flex-col items-center text-center top-2/8 sm:top-[80%] left-1/2 transform -translate-y-1/2 sm:-translate-y-40 -translate-x-1/2">
            <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-muted">
              Marco Valentino
            </h1>
            <p className="font-light text-foreground text-base sm:text-lg mt-2 sm:mt-4">
              Meet the developer behind this Portfolio
            </p>
          </div>
        </div>
      </div>

      <AboutDetails className="mt-8 sm:mt-12" />
    </>
  );
}
