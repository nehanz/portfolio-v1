import * as React from "react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

const educationDetails = [
  {
    course: "B.Sc. (Hons.) in Information Technology",
    institution: "University of Moratuwa",
    link: "https://uom.lk/",
    duration: "2024 - Present",
    details: (
      <div className="text-justify">
        I have a CGPA of 4.00/4.00. I’m involved in Badminton and IEEE, and I
        received Dean's List recognition for my performance in both L1S1 and
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
        I achieved a Z score of 2.519 and earned A's in CMaths, Physics, and
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
        and discipline. I earned 9 A's in my exams.
      </div>
    ),
  },
];

const experienceDetails = [
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
        community initiatives
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

interface TimelineItemProps {
  title: string;
  subtitle: string;
  link: string;
  duration: string;
  details?: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  link,
  duration,
  details,
  isLast = false,
}) => {
  return (
    <div className="pb-4 border-b border-white/10">
      {details ? (
        <HoverCard openDelay={150} closeDelay={200}>
          <HoverCardTrigger asChild>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 bg-[var(--color-accent)] border-white/10">
            <div className="flex justify-between gap-4">
              <div className="space-y-1">
          <p className="text-sm text-[var(--color-foreground)]">
            {details}
          </p>
              </div>
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
    <div className="relative w-fit flex justify-center items-center mx-auto mt-25 mb-25">
      <div className="absolute top-2 left-2 w-full h-full bg-[var(--color-primary)] z-0"></div>

      <div className="relative flex flex-row gap-12 bg-[var(--color-accent)] text-[var(--color-foreground)] px-3 py-10 w-fit z-10 shadow-lg">
        <div className="flex flex-col items-center mx-4">
          <div className="flex flex-row items-center">
            <div className="text-[var(--color-primary)] text-5xl font-extrabold mb-1 font-mono">
              3+
            </div>
            <div className="text-base font-medium opacity-80 text-center ml-2">
              Years of coding experience
            </div>
          </div>
          <div className="mt-2 text-sm italic opacity-30 text-center">
            Developing solid programming skills through continuous learning
          </div>
        </div>

        <div className="w-px bg-white/30 self-stretch" />

        <div className="flex flex-col items-center mx-4">
          <div className="flex flex-row items-center">
            <div className="text-[var(--color-primary)] text-5xl font-extrabold mb-1 font-mono">
              5+
            </div>
            <div className="text-base font-medium opacity-80 text-center ml-2">
              Projects completed
            </div>
          </div>
          <div className="mt-2 text-sm italic opacity-30 text-center">
            Building reliable and scalable solutions through hands-on
            development
          </div>
        </div>
      </div>
    </div>
  );
};

interface HobbyHoverCardProps {
  triggerText: string;
  title: string;
  items: string[];
}

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
      <HoverCardContent className="w-80 bg-[var(--color-accent)] border-white/10">
        <div className="flex justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-md text-[var(--color-foreground)]">{title}</h4>
            <ul className="list-disc list-inside text-xs text-[var(--color-foreground)]">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

interface SectionProps {
  title: string;
  items: Array<{
    course?: string;
    role?: string;
    institution?: string;
    organization?: string;
    link: string;
    duration: string;
  }>;
  type: "education" | "experience";
}

const Section: React.FC<SectionProps> = ({ title, items, type }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-15">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            title={type === "education" ? item.course! : item.role!}
            subtitle={
              type === "education" ? item.institution! : item.organization!
            }
            link={item.link}
            duration={item.duration}
            details={(item as any).details}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const tvShows = ["GOT", "Dark", "The Night Of", "The Outsider"];
  const videoGames = ["COD MW II (2009)", "GTA V", "Crysis 2", "Hot Pursuit 2"];

  return (
    <div className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="w-full p-10">
        <div className="relative">
          <section className="min-h-screen">
            <h1 className="text-5xl font-bold mb-10 text-[var(--color-primary)] mt-8">
              About Me
            </h1>

            <div>
              <p className="text-lg tracking-wider text-justify mb-10">
                Hi, I'm Nehan Wijayagunarathna — a second-year Information
                Technology student at the University of Moratuwa. I'm passionate
                about understanding how systems work behind the scenes and
                building reliable, scalable applications. My experience spans
                full-stack development and DevOps, with a focus on creating
                production-ready solutions. I enjoy optimizing systems,
                debugging complex issues, and improving workflows to build
                efficient, practical software.
              </p>

              <p className="text-lg mb-4 tracking-wider">
                As a member of the Rotaract IT team, I contribute to software
                projects and collaborate on various initiatives. I also tutor
                computer science, helping students master programming concepts.
                These roles have honed my teamwork, communication, and
                problem-solving abilities. I'm always eager for new
                opportunities to learn and contribute to meaningful projects.
              </p>
            </div>

            <StatsBox />

            <div>
              <p className="text-lg tracking-wider text-justify">
                I enjoy watching{" "}
                <HobbyHoverCard
                  triggerText="TV series"
                  title="What i recommend"
                  items={tvShows}
                />
                in my free time, traveling to explore new places, playing{" "}
                <HobbyHoverCard
                  triggerText="video games"
                  title="My top games"
                  items={videoGames}
                />
                , and playing badminton
              </p>
            </div>
          </section>

          <section className="min-h-screen">
            <div className="mt-10">
              <div className="grid grid-cols-2 gap-8">
                <Section
                  title="Education"
                  items={educationDetails}
                  type="education"
                />

                <Section
                  title="Experience"
                  items={experienceDetails}
                  type="experience"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
