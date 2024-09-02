import ProjectList from "../../components/projects";
import { projectsData } from "@/app/data";
import RenderModel from "../../components/RenderModel";
//import MarcoAvatarProjects from "../../components/models/MarcoAvatarProjects";
import dynamic from "next/dynamic";

const MarcoAvatarProjects = dynamic(() => import("../../components/models/MarcoAvatarProjects"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
        {/* Video di Sfondo */}
        <video
            autoPlay
            muted
            loop
            className="fixed top-0 left-0 fixed w-full h-full object-cover -z-10 opacity-60"
            priority
        >
            <source src="/background/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

      <ProjectList projects={projectsData} />
    
        <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-2 h-screen">
            <RenderModel>
                <MarcoAvatarProjects/>
            </RenderModel>
        </div>

    </>
  );
}
