
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ExperienceItem {
  title: string;
  company: string;
  companyLink: string;
  date: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "SDE - 2",
    company: "Aerchain",
    companyLink: "https://www.aerchain.io/",
    date: "March 2023 - Present",
    points: [
      "Worked closely with Product and Business teams to understand customer pain points and workflows, translating them into well-designed, scalable features and delivering them end-to-end.",
      "Redesigned and implemented the application’s authentication architecture by introducing SSO, Social Login, and Magic Link authentication, with secure token-based authentication, authorization flows, and third-party identity provider integrations, improving maintainability and streamlining user onboarding.",
      "Led sprint issue resolution as Single Point of Contact (SPOC), ensuring critical issues were resolved within 1 hour to minimize downtime.",
      "Built and deployed scalable APIs integrated with Syspro and SAP, fully automating data sync and eliminating manual data entry.",
      "Enhanced code quality and team efficiency through peer code reviews, clean code practices."
    ]
  },
  {
    title: "SDE - Intern",
    company: "MountBlue Technologies",
    companyLink: "https://www.mountblue.io/",
    date: "November 2022 - March 2023",
    points: [
      "Completed intensive Full-Stack Developer training, gaining expertise in React, Node.js, and RESTful APIs under industry professionals.",
      "Designed and built multiple web applications, including an e-commerce platform and CRUD application, improving problem-solving skills.",
      "Applied clean coding principles and optimized code efficiency, reducing execution time and improving maintainability.",
      "Participated in weekly coding challenges and group discussions to enhance coding skills and collaboration."
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-12">
          <span className="font-mono text-highlight mr-2">02.</span> Where I've Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-32 mb-6 md:mb-0">
            <div className="flex md:flex-col overflow-x-auto whitespace-nowrap md:whitespace-normal">
              {experiences.map((exp, i) => (
                <Button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  variant="ghost"
                  className={`justify-start font-mono text-sm px-4 py-2 border-b-2 md:border-b-0 md:border-l-2 rounded-none transition-all ${
                    activeTab === i
                      ? "text-highlight border-highlight"
                      : "text-slate border-navy-light hover:bg-navy-light/20 hover:text-slate-light"
                  }`}
                >
                  {exp.company.split(' ')[0]}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="animate-fade-in" key={activeTab}>
              <h3 className="text-xl text-slate-light font-semibold mb-1">
                {experiences[activeTab].title}{" "}
                <span className="text-highlight">@ <a href={experiences[activeTab].companyLink} target="_blank" rel="noopener noreferrer" style={{cursor: 'pointer'}}>{experiences[activeTab].company}</a></span>
              </h3>
              <p className="font-mono text-sm text-slate mb-4">
                {experiences[activeTab].date}
              </p>
              <ul className="space-y-4">
                {experiences[activeTab].points.map((point, i) => (
                  <li key={i} className="flex">
                    <span className="text-highlight mr-2 mt-1.5 flex-shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
