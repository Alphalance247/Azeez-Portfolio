import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "3/2023 – Present",
      title: "Frontend Developer",
      company: "Alluvium | Ekiti State, Nigeria",
      type: "Fulltime",
      description:
        "Developed and maintained core front-end architecture using React, Next.js, and TypeScript, improving interface performance and maintainability. Led UI implementation for a commercial payroll and employee management platform, enabling automated salary disbursement, tax calculations, and HR workflows. Built reusable component systems with Tailwind CSS, improving UI development speed and consistency. Integrated REST APIs and optimized state handling using React Query/Zustand, improving data responsiveness and reducing UI latency. Improved application performance by ~35% through lazy loading, request optimization, and bundle optimization.",
    },
    {
      year: "8/2024 – 5/2025",
      title: "Freelance Frontend Developer",
      company: "FarmPady | Ibadan, Nigeria",
      type: "Freelance",
      description:
        "Built responsive UI and investor-farmer workflow screens using Next.js + Tailwind CSS, improving onboarding and product engagement. Integrated REST APIs for funding requests, profile management, and project status tracking. Contributed to a 40% increase in user onboarding success by improving navigation and accessibility paths.",
    },
    {
      year: "2/2022 – 7/2022",
      title: "Freelance Frontend Developer",
      company: "Nubyira | Osun State, Nigeria",
      type: "Freelance",
      description:
        "Redesigned and rebuilt core platform UI using Next.js, reducing load times and simplifying student navigation. Developed reusable UI components and improved content rendering performance by ~35%. Worked closely with designers to modernize the visual system and enhance usability.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                <div className="">
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className=" relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < experiences.length - 1 ? "h-40" : "h-30"
                      } bg-softGray`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 1 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 1 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
