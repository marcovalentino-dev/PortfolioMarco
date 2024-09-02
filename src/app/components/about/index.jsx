import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

// Dummy data for languages and their percentages
const languages = [
  { name: "JavaScript", percentage: 70, domain: "web" },
  { name: "HTML", percentage: 70, domain: "web" },
  { name: "CSS", percentage: 50, domain: "web" },
  { name: "TypeScript", percentage: 70, domain: "web" },
  { name: "C++", percentage: 60, domain: "software" },
  { name: "C#", percentage: 80, domain: "software" },
  { name: "Java", percentage: 80, domain: "software" },
  { name: "Python", percentage: 70, domain: "software" },
  { name: "Lua", percentage: 80, domain: "software" },
];

// Function to calculate the total percentage for each domain
const calculateDomainPercentage = (domain) => {
  const totalPercentage = languages
    .filter(lang => lang.domain === domain)
    .reduce((acc, lang) => acc + lang.percentage, 0);

  const count = languages.filter(lang => lang.domain === domain).length;
  return count > 0 ? (totalPercentage / count) : 0;
};

const LanguageSkills = () => {
  const webPercentage = calculateDomainPercentage("web");
  const softwarePercentage = calculateDomainPercentage("software");

  return (
    <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 p-4 bg-gray-800 rounded-lg flex flex-col items-center"}>
      {/* Title */}
      <h3 className="text-white text-xl font-bold mb-4 text-center">Programming Skills</h3>

      {/* Language List with Progress Bars */}
      <ul className="text-center mb-6 w-full">
        {languages.map((lang, index) => (
          <li key={index} className="text-white mb-2">
            <div className="flex justify-between items-center">
              <span>{lang.name}</span>
              <span>{lang.percentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
              <div
                className="bg-yellow-500 h-2.5 rounded-full"
                style={{ width: `${lang.percentage}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>

      {/* Domain Circles */}
      <div className="flex justify-around w-full">
        {/* Circle 1 - Web */}
        <div className="flex flex-col items-center">
          <div className="circle border-4 border-yellow-500 w-20 h-20 flex items-center justify-center rounded-full">
            <span className="text-white font-bold">Web</span>
          </div>
          <span className="text-white mt-2">{webPercentage}%</span>
        </div>
        {/* Circle 2 - Software */}
        <div className="flex flex-col items-center">
          <div className="circle border-4 border-yellow-500 w-20 h-20 flex items-center justify-center rounded-full">
            <span className="text-white font-bold">Software</span>
          </div>
          <span className="text-white mt-2">{softwarePercentage}%</span>
        </div>
        {/* Additional Circles can be added similarly */}
      </div>
    </ItemLayout>
  );
};

const AboutDetails = () => {
  return (
    <section className='py-2 w-full'>
      <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
        <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
          <h1 className='text-xl md:text-4xl text-left w-full capitalize'>
            Marco Developer
          </h1>
          <p className='font-light text-xs sm:text-sm md:text-2xl'>
            A passionate and versatile developer with a strong background in digital arts and extensive experience in both game development and enterprise-level applications.
            My journey in programming began at the age of 14, where I self-taught Lua, Python, and C++ to build custom versions of MMORPG games like Metin2.
            I hold a Bachelor&apos;s Degree in Digital Arts with a specialization in video game programming, which has allowed me to refine my skills in both programming and digital graphics.
          </p>
          <p className='font-light text-xs sm:text-sm md:text-2xl'><br />
            Over the years, I have honed my expertise in various technologies and software tools commonly used in the gaming and IT industry, including Unity, Autodesk Maya, Photoshop, Illustrator, Salesforce, and others.
            I learned to use many different programming languages like Java, Apex, C#, SQL, HTML5, Javascript, and Python.
            I have a proven track record of developing high-performance desktop and mobile applications, demonstrating a strong ability to adapt in both autonomous and collaborative environments.
          </p>
          <p className='font-light text-xs sm:text-sm md:text-2xl'><br />
            My career reflects a continuous learning curve and adaptability, with a commitment to delivering high-quality and efficient software solutions across different platforms and industries.
          </p>
        </ItemLayout>



        <ItemLayout className={"col-span-full xs:col-span-8 lg:col-span-4 text-foreground"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-10xl">
            3+ years of experience{" "} <sub className="font-semibold text-foreground"></sub>
          </p>
        </ItemLayout>

        {/* Programming Skills Item */}
        <LanguageSkills />


        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,cloudflare,firebase,kubernetes,azure,cs,cpp,java,js,py,lua,react,nodejs,nextjs,jquery,dotnet,threejs,mongodb,mysql,git,github,bitbucket,jenkins,vscode,eclipse,figma,blender,ai,ps,bootstrap,tailwind,css,linkedin,instagram,discord,postman,npm,unity,azul,notion`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
