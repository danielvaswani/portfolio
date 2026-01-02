import Sidebar from "../components/sidebar";
import ProjectCard from "../components/ProjectCard";
import EmploymentCard from "../components/EmploymentCard";
import EducationCard from "../components/EducationCard";

export default function Page() {
  const projects = [
    {
      title: "Productivity App (Personal Project)",
      time: "JUNE 2024 — JULY 2024",
      description: [
        "Showcased my frontend skills by implementing a Budgeting and Todo List web app that persists the list items to a hosted cloud postgres database.",
        "Demonstrated how easy pie chart and drag and drop functionality can be to implement without complex and bloated frontend libraries.",
      ],
      link: "https://productivity-xi.vercel.app",
    },
    {
      title: "Jumbo Recipe Creator",
      time: "SEPT 2023 — JANUARY 2024",
      description: [
        "Implemented a concept AI recipe creator application, using ChatGPT and DALL-E as generation.",
        "As a team, we crafted the Design and UX for Jumbo Supermarkten.",
        "Personally led the development of the final application, in which Jumbo took inspiration from.",
      ],
    },
    {
      title: "Markr. Tool",
      time: "AUGUST 2022 — JANUARY 2023",
      description: [
        "Created a concept CMS and its paired marketing site for Stuurmen, a media agency.",
        "Enabled them to create robust brand guidelines for all of their clients.",
      ],
      printMargin: true,
    },
    {
      title: "Katale (Personal Project)",
      time: "JUNE 2024 — JULY 2024",
      description: [
        "Created a Wordle clone that uses a different word in the Indonesian language everyday (Utilizing CRON on Vercel).",
        "Made with Firebase and NextJS.",
      ],
      link: "https://katale-xi.vercel.app",
    },
    {
      title: "Ship Service (Personal Project)",
      time: "DEC 2024 — JAN 2025",
      description: [
        "Created a Cruise Ship port schedule web scraper to alert my parents once a day which ships will arrive the next day on their island (Sint Maarten).",
        "Used iOS Shortcuts, and a custom hosted Fastify API.",
      ],
      link: "https://ship-service.vercel.app",
    },
    {
      title: "Javascript, Python and Java tutoring",
      time: "JUNE 2021 — CURRENT",
      description: [
        "Provided free tutoring for friends, family and acquaintances in JavaScript, Python, and Java.",
        "Helped them understand core programming concepts, debug their code, and complete their projects successfully.",
        "Conducted both one-on-one and group sessions, tailoring the content to the needs and skill levels of the participants.",
        "Learned that I enjoy working for a team and will do a lot to get things done, going the extra mile, for the good of the teams.",
      ],
    },
  ];

  const employmentHistory = [
    {
      title: "Internship Frontend Developer",
      company: "Jumbo Supermarkten",
      location: "Veghel",
      time: "FEBRUARY 2024 — JUNE 2024",
      description: [
        "Developed an internal dashboard that tracks metrics such as adoption and efficiency of Jumbo’s design system (Kompas) UI components across engineering and design teams.",
        "Worked in close collaboration with Frontend enablement team, iterating quickly based on feedback.",
        "Technologies used: Nuxt.js, TypeScript, tailwindcss.",
      ],
    },
    {
      title: "Internship Frontend Developer / UI Designer",
      company: "Topical Meetings",
      location: "Tilburg",
      time: "FEBRUARY 2023 — JUNE 2023",
      description: [
        "Worked for a small startup trying to revolutionize the notetaking during business meetings.",
        "Worked on the onboarding process, actual meeting creation and login flows.",
        "UI elements are still in production as of September 2024.",
        "Used technologies like React, MaterialUI and Laravel.",
      ],
    },
  ];

  const education = [
    {
      degree: "Associate Degree ICT",
      institution: "Fontys University of Applied Sciences",
      location: "Eindhoven",
      time: "FEBRUARY 2023 — PRESENT",
    },
  ];

  const name = "Daniel Vaswani";
  const title = "Frontend Developer";
  const location = {
    city: "Venlo",
    country: "Netherlands",
  };
  const contact = {
    phone: "+31 (0) 685734532",
    email: "vaswanidaniel@gmail.com",
  };
  const skills = [
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "NextJS", level: 85 },
    { name: "SQL", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "Python", level: 65 },
    { name: "Git", level: 80 },
    { name: "HTML & CSS", level: 90 },
  ];
  const profileImage = "/me.jpeg";

  const sidebarProps = { name, title, location, contact, skills, profileImage };

  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar {...sidebarProps} />
      <main className="flex-1 flex flex-col gap-3 p-6 ml-[230px]">
        <section className="mb-1">
          <h2 className="text-lg font-bold mb-3 pb-2 border-b border-gray-300">
            Profile
          </h2>
          <p className="text-sm text-gray-700">
            I am a Fullstack Typescript developer with more emphasis on
            Frontend. I have studied at Fontys for several years, conducting
            successful projects with clients and interned at TopicalMeetings and
            Jumbo. In my free time I love to make side projects showcasing my
            skills in JS/TS technologies like React/Vue on the Frontend, and a
            simple serverless backend by either utilizing metaframeworks like
            NextJS, Nuxt, or even using expressjs, with both SQL and NoSQL DBs.
          </p>
        </section>

        <section className="mb-1">
          <h2 className="text-lg font-bold mb-1 pb-2 border-b border-gray-300">
            Employment History
          </h2>
          {employmentHistory.map((job, index) => (
            <EmploymentCard
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              time={job.time}
              description={job.description}
            />
          ))}
        </section>

        <section className="mb-1">
          <h2 className="text-lg font-bold mb-1 pb-2 border-b border-gray-300">
            Education
          </h2>
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              time={edu.time}
            />
          ))}
        </section>

        <section>
          <h2 className="text-lg font-bold mb-1 pb-2 border-b border-gray-300">
            Projects
          </h2>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              time={project.time}
              description={project.description}
              printMargin={project.printMargin}
              link={project.link}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
