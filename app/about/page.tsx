"use client";
import * as React from "react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import Image from "next/image";
import certificate1 from "@/public/images/certificate1.png";
import certificate2 from "@/public/images/certificate2.png";
import certificate3 from "@/public/images/certificate3.png";
import { icons } from "lucide-react";

{
}
import javascriptIcon from "@/public/icons/javasripticon.svg";
import typescriptIcon from "@/public/icons/typescripticon.svg";
import pythonIcon from "@/public/icons/pythonicon.svg";
import reactIcon from "@/public/icons/reacticon.svg";
import nextjsIcon from "@/public/icons/nextjsicon.svg";
import nodejsIcon from "@/public/icons/nodejsicon.svg";
import expressIcon from "@/public/icons/expressjsicon.svg";
import mongodbIcon from "@/public/icons/mongodbicon.svg";
import postgresqlIcon from "@/public/icons/postgresqlicon.svg";
import dockerIcon from "@/public/icons/dockericon.svg";
import kubernetesIcon from "@/public/icons/kubernetesicon.svg";
import awsIcon from "@/public/icons/awsicon.svg";
import javaIcon from "@/public/icons/javaicon.svg";
import cIcon from "@/public/icons/cicon.svg";
import cppIcon from "@/public/icons/cppicon.svg";
import phpIcon from "@/public/icons/phpicon.svg";
import sqlIcon from "@/public/icons/sqlicon.svg";
import bashIcon from "@/public/icons/bashicon.svg";
import tailwindIcon from "@/public/icons/tailwindicon.svg";
import htmlIcon from "@/public/icons/htmlicon.svg";
import cssIcon from "@/public/icons/cssicon.svg";
import shadcnIcon from "@/public/icons/shadcnicon.svg";
import fastapiIcon from "@/public/icons/fastapiicon.svg";
import prismaIcon from "@/public/icons/prismaicon.svg";
import firebaseIcon from "@/public/icons/firebaseicon.svg";
import supabaseIcon from "@/public/icons/supabaseicon.svg";
import mysqlIcon from "@/public/icons/mysqlicon.svg";
import mssqlIcon from "@/public/icons/mssqlicon.svg";
import azureIcon from "@/public/icons/azureicon.svg";
import tektonIcon from "@/public/icons/tektonicon.svg";
import openshiftIcon from "@/public/icons/openshifticon.svg";
import githubActionsIcon from "@/public/icons/githubactionsicon.svg";
import ubuntuIcon from "@/public/icons/ubuntuicon.svg";
import parrotOSIcon from "@/public/icons/parrotosicon.svg";
import gitIcon from "@/public/icons/giticon.svg";
import githubIcon from "@/public/icons/githubicon.svg";
import arduinoIcon from "@/public/icons/arduinoicon.svg";
import esp32Icon from "@/public/icons/esp32icon.svg";
import iotIcon from "@/public/icons/ioticon.svg";
import figmaIcon from "@/public/icons/figmaicon.svg";
import canvaIcon from "@/public/icons/canvaicon.svg";
import illustratorIcon from "@/public/icons/illustratoricon.svg";
import photoshopIcon from "@/public/icons/photoshopicon.svg";
import premiereprIcon from "@/public/icons/premierepro.svg";
import aftereffectsIcon from "@/public/icons/aftereffects.svg";
import postmanIcon from "@/public/icons/postmanicon.svg";

// Types
interface TimelineItemData {
  title: string;
  subtitle: string;
  link: string;
  duration: string;
  details?: React.ReactNode;
}

interface EducationItem {
  course: string;
  institution: string;
  link: string;
  duration: string;
  details: React.ReactNode;
}

interface ExperienceItem {
  role: string;
  organization: string;
  link: string;
  duration: string;
  details: React.ReactNode;
}

interface HobbyHoverCardProps {
  triggerText: string;
  title: string;
  items: string[];
}

interface TimelineItemProps {
  title: string;
  subtitle: string;
  link: string;
  duration: string;
  details?: React.ReactNode;
}

interface SectionProps {
  title: string;
  items: Array<EducationItem | ExperienceItem>;
  type: "education" | "experience";
}

const EDUCATION_DETAILS: EducationItem[] = [
  {
    course: "B.Sc. (Hons.) in Information Technology",
    institution: "University of Moratuwa",
    link: "https://uom.lk/",
    duration: "2024 - Present",
    details: (
      <div className="text-justify">
        I have a CGPA of 4.00/4.00. I&apos;m involved in Badminton and IEEE, and I
        received Dean&apos;s List recognition for my performance in both L1S1 and
        L2S1.
      </div>
    ),
  },
  {
    course: "Physical science",
    institution: "Nalanda College",
    link: "https://nalandacollege.lk/",
    duration: "2020 - 2023",
    details: (
      <div className="text-justify">
        I achieved a Z score of 2.519 and earned A&apos;s in CMaths, Physics, and
        ICT. I was also a member of the School Math Society.
      </div>
    ),
  },
  {
    course: "GCE O/L",
    institution: "Dharmapala Vidyalaya Pannipitiya",
    link: "https://www.dharmapalavidyalaya.org/",
    duration: "2013 - 2019",
    details: (
      <div className="text-justify">
        I was a school prefect, where I learned leadership skills and helped
        with various tasks. I also played badminton, which taught me teamwork
        and discipline. I earned 9 A&apos;s in my exams.
      </div>
    ),
  },
];

const EXPERIENCE_DETAILS: ExperienceItem[] = [
  {
    role: "Team Member - IT Avenue",
    organization: "Rotaract Club of University of Moratuwa",
    link: "https://rotaractmora.org/",
    duration: "2025 - Present",
    details: (
      <div className="text-justify">
        As a member of the Rotaract Club, I contributed to various projects,
        including software development, server migrations, and other
        tech-related tasks, helping improve club operations and support
        community initiatives.
      </div>
    ),
  },
  {
    role: "Computer Science Tutor",
    organization: "Donum Dei International",
    link: "https://school.triazinesoft.in/Details/donum-dei-international-school/",
    duration: "2024 - Present",
    details: (
      <div className="text-justify">
        Tutoring school students in computer science subjects, helping them
        understand programming concepts, algorithms, and data structures, and
        assisting them in improving their coding skills and academic
        performance.
      </div>
    ),
  },
];

const CERTIFICATION_DETAILS = [
  {
    name: "AWS Certified Cloud Practitioner",
    publisher: "Amazon Web Services",
    link: "https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials/8D79F3AVR7",
    imageurl: certificate1,
  },
  {
    name: "CI/CD",
    publisher: "IBM",
    link: "https://www.credly.com/badges/377eb8cb-b0bc-48cc-9dae-c4b89721451f/public_url",
    imageurl: certificate2,
  },
  {
    name: "Linux Commands & Shell Scripting",
    publisher: "IBM",
    link: "https://www.credly.com/badges/a5e0953f-a142-4fb0-9c8a-ce00e614c712/public_url",
    imageurl: certificate3,
  },
];

const SkillsList = [
  {
    skill: "JavaScript",
    category: "Programming Language",
    icon: javascriptIcon,
  },
  {
    skill: "TypeScript",
    category: "Programming Language",
    icon: typescriptIcon,
  },
  { skill: "Python", category: "Programming Language", icon: pythonIcon },
  { skill: "Java", category: "Programming Language", icon: javaIcon },
  { skill: "C", category: "Programming Language", icon: cIcon },
  { skill: "C++", category: "Programming Language", icon: cppIcon },
  { skill: "PHP", category: "Programming Language", icon: phpIcon },
  { skill: "SQL", category: "Programming Language", icon: sqlIcon },
  { skill: "Bash", category: "Programming Language", icon: bashIcon },

  { skill: "React", category: "Frontend development", icon: reactIcon },
  { skill: "Next.js", category: "Frontend development", icon: nextjsIcon },
  {
    skill: "Tailwind CSS",
    category: "Frontend development",
    icon: tailwindIcon,
  },
  { skill: "HTML", category: "Frontend development", icon: htmlIcon },
  { skill: "CSS", category: "Frontend development", icon: cssIcon },
  { skill: "shadcn", category: "Frontend development", icon: shadcnIcon },

  { skill: "Node.js", category: "Backend development", icon: nodejsIcon },
  { skill: "Express.js", category: "Backend development", icon: expressIcon },
  { skill: "FastAPI", category: "Backend development", icon: fastapiIcon },
  { skill: "Prisma", category: "Backend development", icon: prismaIcon },
  { skill: "Firebase", category: "Backend development", icon: firebaseIcon },
  { skill: "Supabase", category: "Backend development", icon: supabaseIcon },

  { skill: "MongoDB", category: "Database", icon: mongodbIcon },
  { skill: "MySQL", category: "Database", icon: mysqlIcon },
  { skill: "PostgreSQL", category: "Database", icon: postgresqlIcon },
  { skill: "MSSQL", category: "Database", icon: mssqlIcon },

  { skill: "Docker", category: "DevOps", icon: dockerIcon },
  { skill: "Kubernetes", category: "DevOps", icon: kubernetesIcon },
  { skill: "AWS", category: "DevOps", icon: awsIcon },
  { skill: "Azure", category: "DevOps", icon: azureIcon },
  { skill: "Tekton", category: "DevOps", icon: tektonIcon },
  { skill: "OpenShift", category: "DevOps", icon: openshiftIcon },
  { skill: "GitHub Actions", category: "DevOps", icon: githubActionsIcon },
  { skill: "Ubuntu", category: "DevOps", icon: ubuntuIcon },
  { skill: "Parrot OS", category: "DevOps", icon: parrotOSIcon },
  { skill: "Git", category: "DevOps", icon: gitIcon },
  { skill: "GitHub", category: "DevOps", icon: githubIcon },

  { skill: "Arduino", category: "Other Tools", icon: arduinoIcon },
  { skill: "ESP32", category: "Other Tools", icon: esp32Icon },
  { skill: "IoT", category: "Other Tools", icon: iotIcon },
  { skill: "Figma", category: "Other Tools", icon: figmaIcon },
  { skill: "Canva", category: "Other Tools", icon: canvaIcon },
  { skill: "Illustrator", category: "Other Tools", icon: illustratorIcon },
  { skill: "Photoshop", category: "Other Tools", icon: photoshopIcon },
  { skill: "Premiere Pro", category: "Other Tools", icon: premiereprIcon },
  { skill: "After Effects", category: "Other Tools", icon: aftereffectsIcon },  
  { skill: "Postman", category: "Other Tools", icon: postmanIcon },

];

const HighlightItems = [
  {
    title: "9 th Place in Sherlock 2024",
    organizedBy:
      "IEEE Women in Engineering Student Branch Affinity Group of IIT",
    description:
      "SHErlock 2.0 is a national problem-solving competition that challenged undergraduates across Sri Lanka with complex puzzles and strategic scenarios. Organized by IEEE WIE IIT, the event emphasized critical thinking, teamwork, and celebrated women’s impact in STEM.",
  },
  {
    title: "Finalist in Medusa2.0 2025",
    organizedBy: "ECSC University of Kelaniya",
    description:
      "MEDUSA 2.0 is the ultimate cybersecurity battleground where the brightest minds from universities across the nation compete in advanced Capture The Flag challenges. This year, we have included various new types of CTF challenges, expanding the competition with innovative categories and advanced problem-solving experiences for all participants.",
  },
  {
    title: "111 th Place in Mora Xtreme 2025",
    organizedBy: "IEEE Student Branch University of Moratuwa",
    description:
      "Mora Xtreme is an annual 24-hour hackathon organized by the IEEE Student Branch of the University of Moratuwa. It brings together innovative minds to develop cutting-edge solutions under time constraints, fostering creativity, teamwork, and technical skills in a high-pressure environment.",
  },
];

const TV_SHOWS = ["GOT", "Dark", "The Night Of", "The Outsider"];
const VIDEO_GAMES = ["COD MW II (2009)", "GTA V", "Crysis 2", "Hot Pursuit 2"];

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  link,
  duration,
  details,
}) => {
  return (
    <div className="pb-4 border-b border-white/10">
      {details ? (
        <HoverCard openDelay={150} closeDelay={200}>
          <HoverCardTrigger asChild>
            <h3 className="text-2xl font-semibold cursor-pointer hover:opacity-80 transition-opacity">
              {title}
            </h3>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 bg-(--color-accent1) border-white/10">
            <div className="space-y-1">
              <p className="text-sm text-(--color-foreground)">
                {details}
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <h3 className="text-2xl font-semibold">{title}</h3>
      )}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <p className="text-sm opacity-70 mt-1">{subtitle}</p>
      </a>
      <p className="text-xs opacity-50 mt-1">{duration}</p>
    </div>
  );
};

const StatsBox: React.FC = () => {
  return (
    <div className="relative w-fit mx-auto my-25 group">
      <div className="absolute top-1 left-1 w-full h-full bg-(--color-primary) z-0 group-hover:scale-96 transition-all duration-300 ease-in-out" />
      <div className="relative flex flex-row gap-12 bg-(--color-accent1) text-(--color-foreground) px-6 py-10 w-fit z-10 cursor-default transition-all duration-500 ease-in-out group-hover:scale-103">
      <StatItem
        value="3+"
        label="Years of coding experience"
        description="Developing solid programming skills through continuous learning"
      />

      <div className="w-px bg-white/20 self-stretch transition-all duration-300" />

      <StatItem
        value="5+"
        label="Projects completed"
        description="Building reliable and scalable solutions through hands-on development"
      />
      </div>
    </div>
  );
};

const StatItem: React.FC<{
  value: string;
  label: string;
  description: string;
}> = ({ value, label, description }) => (
  <div className="flex flex-col items-center mx-4">
    <div className="flex flex-row items-center">
      <div className="text-(--color-primary) text-5xl font-extrabold mb-1 font-mono">
        {value}
      </div>
      <div className="text-base font-medium opacity-80 text-center ml-2">
        {label}
      </div>
    </div>
    <div className="mt-2 text-sm italic opacity-30 text-center">
      {description}
    </div>
  </div>
);

const HobbyHoverCard: React.FC<HobbyHoverCardProps> = ({
  triggerText,
  title,
  items,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="relative cursor-pointer group mx-1.5">
          {triggerText}
          <span
            className="absolute left-0 -bottom-px w-full h-px bg-current transition-all duration-700 scale-x-100 group-hover:scale-x-0 origin-left"
            aria-hidden="true"
          />
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-(--color-accent1) border-white/10">
        <div className="space-y-1">
          <h4 className="text-md text-(--color-foreground)">{title}</h4>
          <ul className="list-disc list-inside text-xs text-(--color-foreground)">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const SectionExperience: React.FC<SectionProps> = ({ title, items, type }) => {
  const getTimelineItemData = (
    item: EducationItem | ExperienceItem
  ): TimelineItemData => ({
    title:
      type === "education"
        ? (item as EducationItem).course
        : (item as ExperienceItem).role,
    subtitle:
      type === "education"
        ? (item as EducationItem).institution
        : (item as ExperienceItem).organization,
    link: item.link,
    duration: item.duration,
    details: item.details,
  });

  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-(--color-primary) mb-10">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <TimelineItem
            key={`${type}-${index}`}
            {...getTimelineItemData(item)}
          />
        ))}
      </div>
    </div>
  );
};

const Introduction: React.FC = () => {
  return (
    <>
      <p className="text-lg tracking-wider text-justify mb-10">
        Hi, I&apos;m Nehan Wijayagunarathna — a second-year Information Technology
        student at the University of Moratuwa. I&apos;m passionate about
        understanding how systems work behind the scenes and building reliable,
        scalable applications. My experience spans full-stack development and
        DevOps, with a focus on creating production-ready solutions. I enjoy
        optimizing systems, debugging complex issues, and improving workflows to
        build efficient, practical software.
      </p>

      <p className="text-lg mb-4 tracking-wider">
        As a member of the Rotaract IT team, I contribute to software projects
        and collaborate on various initiatives. I also tutor computer science,
        helping students master programming concepts. These roles have honed my
        teamwork, communication, and problem-solving abilities. I&apos;m always eager
        for new opportunities to learn and contribute to meaningful projects.
      </p>
    </>
  );
};

const HobbiesSection: React.FC = () => {
  return (
    <p className="text-lg tracking-wider text-justify">
      I enjoy watching{" "}
      <HobbyHoverCard
        triggerText="TV series"
        title="What I recommend"
        items={TV_SHOWS}
      />
      in my free time, traveling to explore new places, playing{" "}
      <HobbyHoverCard
        triggerText="video games"
        title="My top games"
        items={VIDEO_GAMES}
      />
      , and playing badminton.
    </p>
  );
};

const Certifications: React.FC = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-(--color-primary) mb-10">
        Certifications
      </h2>
      <div className="flex flex-row gap-6 flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10  w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-9">
            {CERTIFICATION_DETAILS.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-40 relative bg-(--color-accent1)">
                  {cert.imageurl && (
                    <Image
                      src={cert.imageurl}
                      alt={cert.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-4 bg-(--color-accent1)">
                  <p className="text-md font- mb-2 transition-colors">
                    {cert.name}
                  </p>
                  <p className="text-xs opacity-70">
                    Published by {cert.publisher}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center ">
            {!showPopup ? (
              <button
                onClick={() => {
                  setShowPopup(true);
                  setTimeout(() => setShowPopup(false), 2000);
                }}
                className="text-xs font-semibold border border-white/10 px-4 py-2 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                View More
              </button>
            ) : (
              <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <a
                  href="https://www.linkedin.com/in/nehanz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold border border-white/10 px-4 py-2 hover:border-white/30 transition-all duration-300 cursor-pointer text-center"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.credly.com/users/nehan-wijayagunarathna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold border border-white/10 px-4 py-2 hover:border-white/30 transition-all duration-300 cursor-pointer text-center"
                >
                  Credly
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillSection: React.FC = () => {
  const groupedSkills = SkillsList.reduce((acc, { skill, category, icon }) => {
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ skill, icon });
    return acc;
  }, {} as Record<string, Array<{ skill: string; icon: unknown }>>);

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-(--color-primary) mb-10">
        What I gain so far
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="border-b border-white/10 pb-6">
            <p className="text-lg font-medium mb-4 text-(--color-accent2)">
              {category}
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map(({ skill, icon }, index) => (
                <div
                  key={index}
                  className="px-4 py-2 border border-(--color-accent1) hover:border-white/60  transition-all duration-300 cursor-default"
                >
                  <span className="inline-block w-5 h-5 mr-2 align-middle relative">
                    <Image
                      src={icon}
                      alt={skill}
                      fill
                      className="object-contain invert"
                    />
                  </span>
                  <span className="text-sm font-medium font-color-accent">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HighlightSection: React.FC = () => {
  return (
    <div className="mt-20 flex flex-col justify-center">
      <div>
        {" "}
        <h2 className="text-4xl font-bold text-(--color-primary) mb-20">
          Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {HighlightItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden border border-transparent hover:border-white/30 transition-all duration-300 cursor-default bg-(--color-accent1)"
            >
              <div className="p-6">
                <p className="text-lg font-bold mb-2 text-(--color-foreground)">
                  {item.title}
                </p>
                <p className="text-sm opacity-70 mb-4">
                  Organized by {item.organizedBy}
                </p>
                <p className="text-sm text-(--color-foreground) text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-10">
            <button
            className="border border-white/10 px-4 py-2 hover:border-white/30 transition-all duration-300 cursor-pointer mt-8 text-sm font-semibold"
            onClick={() => {
              window.open("https://www.linkedin.com/in/nehanz/", "_blank");
            }}
            >
            View More
            </button>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="w-full p-10">
        <div className="relative">
          <section className="min-h-screen">
            <h1 className="text-5xl font-bold mb-10 text-(--color-primary) mt-5">
              About Me
            </h1>

            <Introduction />
            <StatsBox />
            <HobbiesSection />
          </section>

          <section className="min-h-screen">
            <div className="w-full h-full">
              <div className="grid grid-cols-2 gap-8">
                <SectionExperience
                  title="Education"
                  items={EDUCATION_DETAILS}
                  type="education"
                />

                <SectionExperience
                  title="Experience"
                  items={EXPERIENCE_DETAILS}
                  type="experience"
                />
              </div>
              <div className="mt-10">
                <Certifications />
              </div>
            </div>
          </section>

          <section className="min-h-screen">
            <SkillSection />
          </section>

          <section className="min-h-screen">
            <HighlightSection />
          </section>
        </div>
      </div>
    </div>
  );
}
