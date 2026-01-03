"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import type { StaticImageData } from "next/image";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const scaleVariant = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Image from "next/image";

import project1 from "@/public/images/project1.png";
import project2 from "@/public/images/project2.png";
import project3 from "@/public/images/project3.png";
import project4 from "@/public/images/project4.png";
import project5 from "@/public/images/project5.png";
import project6 from "@/public/images/project6.png";

interface ProjectData {
  title: string;
  description: string;
  imageSrc?: string | StaticImageData;
  gitLink?: string;
  siteLink?: string;
  techStack: string[];
  contribution?: string;
  duration?: string;
  client?: string;
  category: string;
  label?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  onClick: () => void;
}

const PROJECT_DATA: ProjectData[] = [
  {
    title: "Docu",
    description:
      "Docu is a Python tool that logs terminal commands and outputs, lets you add comments, and can mask sensitive data with docu mask. Its AI assistant can summarize sessions, explain commands, and help debug, while saving everything in organized, custom directories for easy access",
    techStack: ["Python", "Bash", "GeminiAI"],
    gitLink: "https://github.com/nehanz/Docu",
    siteLink:
      "https://www.linkedin.com/posts/nehanz_excited-to-announce-the-development-of-docu-activity-7385041651804729344-k1lD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFY3jsBsh0Wrd04OGbIJ_QOhT2o_PKe93U",
    category: "My Top Projects",
    label: "Individual Project",
    duration: "2025 Sep",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and experience. It features a modern design, responsive layout, and smooth animations.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    gitLink: "https://github.com/nehanz/portfolio-v1",
    siteLink: "https://nehanw.vercel.app",
    category: "My Top Projects",
    label: "Individual Project",
    contribution: "Frontend Development, UI/UX Design",
    duration: "2025 Nov - 2026 Jan",
    imageSrc: project5,
  },
  {
    title: "OpsCore",
    description:
      "Contributed to the OpsCore server migration project for the Rotaract Club, using Docker, Nginx, MySQL, and WordPress to containerize and optimize the deployment environment for better performance and maintainability.",
    techStack: ["Docker", "Nginx", "MySQL", "WordPress"],
    category: "On going Projects",
    duration: "2025 Sep - Present",
    label: "Team Project",
    contribution: "DevOps, SRE",
    client: "Rotaract Club of University of Moratuwa",
  },
  {
    title: "Are You Ready 2026",
    description:
      "Contributed to the upgrade and improvement of the Are You Ready website by the University of Moratuwa. Assisted in enhancing site functionality, usability, and overall user experience as part of a collaborative development effort.",
    techStack: ["Nextjs", "Shadcn UI", "Firebase"],
    category: "Volunteer Projects",
    siteLink: "https://areyouready.uom.lk/",
    duration: "2025 Sep - Present",
    label: "Team Project",
    contribution: "Full Stack Development",
  },
  {
    title: "Ecafe",
    description:
      "Developed a fully responsive coffee shop e-commerce platform that allows users to browse products, manage their cart, authenticate accounts, and securely checkout. Implemented real-time order updates and notifications to enhance user experience. Designed a clean, modern interface using Tailwind CSS and ensured smooth navigation across devices. Added features like product search, filtering, and category organization for better usability. Integrated backend functionality to handle orders, inventory management, and user data securely.",
    techStack: ["Next.js", "NodeJs", "Tailwind CSS", "MongoDB"],
    gitLink: "https://github.com/nehanz/IN1621",
    category: "Projects worked on",
    duration: "2025 May - 2025 June",
    contribution: "Full Stack Development",
    label: "Team Project",
    imageSrc: project6,
  },
  {
    title: "Bell1.0",
    description:
      "Developed a mobile app using React Native and Expo to automate school bell schedules. The app allows users to set and manage daily alarms, sending push notifications to signal class transitions. Designed for simplicity and offline reliability, it operates without a backend while providing a clean and intuitive interface. Users can easily customize schedules, enable or disable specific alarms, and receive timely notifications for smooth school operations. The app emphasizes ease of use, accessibility, and dependable functionality across devices",
    techStack: ["React Native", "Expo"],
    gitLink: "https://github.com/NehanZ/Farmify",
    category: "Projects worked on",
    duration: "2025 Mar - 2025 Apr",
    contribution: "Mobile App Development",
    label: "Individual Project",
    client: "Donum Dei International School",
    imageSrc: project1,
  },
  {
    title: "Zenn Table",
    description:
      "The Zenn Table is an automated sand plotter coffee table that combines the art of sand design with smart digital interaction. Powered by an ESP32 and a Core XY motion system, it precisely creates intricate patterns using a magnetic steel ball, while users control designs, LED effects, and colors via a touch display. Its web application enables shop assistants to send personalized messages—perfect for special occasions—while automated drawers and dynamic LED synchronization enhance both functionality and aesthetics",
    techStack: [
      "Embedded System",
      "IOT",
      "C++",
      "ESP32",
      "Arduino",
      "React",
    ],
    gitLink: "https://github.com/nehanz/IN1901",
    category: "Projects worked on",
    duration: "2024 Dec - 2025 Aug",
    contribution: "Embedded Systems Design, Firmware Development, Web App Development",
    label: "Team Project",
    imageSrc: project4,
  },  
  {
    title: "Hotel Booking System - frontend",
    description:
      "Developed the frontend of a hotel booking system using React.js and Tailwind CSS. Implemented features such as room browsing, booking management, user authentication, and payment processing to provide a seamless user experience for hotel guests",
    techStack: [
      "React.js",
      "Tailwind CSS",
    ],
    gitLink: "https://github.com/nehanz/hotel-frontend",
    category: "Projects worked on",
    duration: "2024 June - 2025 July",
    contribution: "Frontend Development",
    label: "Individual Project",
    imageSrc: project3,
  },  
  {
    title: "Farmify",
    description:
      "Developed Farmify, a web platform where farmers can ask questions and experts provide answers, facilitating knowledge sharing and support in agriculture",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    gitLink: "https://github.com/NehanZ/Farmify",
    category: "Projects worked on",
    duration: "2024 June - 2024 July",
    contribution: "Full Stack Development",
    label: "Team Project",
    imageSrc: project2,
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="border border-transparent hover:border-white/30 transition-all duration-300 cursor-pointer bg-[var(--color-accent1)] p-6 h-full flex flex-col"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Open details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={scaleVariant}
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-2xl font-bold mb-5">{project.title}</h2>
      </div>

      <p className="mb-4 flex-grow line-clamp-3">{project.description}</p>

      {project.label && (
        <div className="mb-3">
          <span className="bg-[var(--color-primary)] text-[var(--color-background)] text-xs px-3 py-1">
            {project.label}
          </span>
        </div>
      )}

      <div className="mb-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium">Tech Stack</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="border border-[var(--color-accent2)] text-white/90 text-sm px-2 py-1"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-white/90 text-sm px-3 py-1">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectDetailsDialog: React.FC<{
  project: ProjectData;
  open: boolean;
  onClose: () => void;
}> = ({ project, open, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-10"
    >
      <motion.div
        ref={dialogRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-[var(--color-accent1)] p-6 md:p-8 w-screen max-w-2xl md:max-w-4xl md:mx-0 -mx-4 max-h-[80vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-white hover:text-[var(--color-accent2)] cursor-pointer transition-colors p-2"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-5 pr-8">{project.title}</h2>

        {project.label && (
          <div className="mb-4">
            <span className="bg-[var(--color-primary)] text-[var(--color-background)] text-xs px-3 py-1">
              {project.label}
            </span>
          </div>
        )}

        <p className="mb-6 text-[var(--color-foreground)]">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            {project.contribution && (
              <div className="mb-6">
                <p className="font-bold mb-2 text-sm text-[var(--color-accent2)]">
                  My Contribution
                </p>
                <p className="text-white/90">{project.contribution}</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {project.duration && (
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-bold text-[var(--color-accent2)] mb-1">
                      Duration
                    </p>
                    <p className="">{project.duration}</p>
                  </div>
                </div>
              )}

              {project.client && (
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-bold text-[var(--color-accent2)] mb-1">
                      Client
                    </p>
                    <p className="">{project.client}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="mb-6">
              <p className="font-bold mb-3 text-sm text-[var(--color-accent2)] flex items-center gap-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-white/90 text-sm px-4 py-2 border border-[var(--color-accent2)] cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {project.imageSrc && (
            <div className="flex items-center justify-center">
              <Image
                src={project.imageSrc}
                alt={project.title}
                className="max-h-64 w-auto object-contain"
                style={{ height: "auto", width: "auto", maxHeight: "16rem" }}
                width={400}
                height={256}
              />
            </div>
          )}
        </div>

        {(project.gitLink || project.siteLink) && (
            <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-white/10">
            {project.gitLink && (
              <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[var(--color-accent2)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] text-white px-5 py-2.5 transition-colors duration-300 w-full sm:w-auto"
              >
              <FaGithub /> View Code
              </a>
            )}
            {project.siteLink && (
              <a
              href={project.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[var(--color-accent2)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] text-white px-5 py-2.5 transition-colors duration-300 w-full sm:w-auto"
              >
              <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const ProjectSection: React.FC<{ category: string }> = ({ category }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const filteredProjects = PROJECT_DATA.filter((project) => project.category === category);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  if (filteredProjects.length === 0) return null;

  return (
    <motion.section
      ref={ref}
      className="mb-10"
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={containerVariants}
    >
      <motion.p 
        className="text-2xl font-bold text-[var(--color-foreground)] mb-6" 
        variants={fadeInVariant}
      >
        {category}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div key={idx} variants={fadeInVariant}>
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </div>
      <ProjectDetailsDialog
        project={selectedProject!}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
};

export default function Projects() {
  const categories = Array.from(new Set(PROJECT_DATA.map((p) => p.category)));
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={mainRef}
      className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="w-full p-10">
        <div className="relative">
          <motion.section 
            className="mb-10" 
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-5xl font-bold text-[var(--color-primary)] mb-10 mt-5" 
              variants={fadeInVariant}
            >
              Projects
            </motion.h1>
            {categories.map((category) => (
              <ProjectSection key={category} category={category} />
            ))}
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}