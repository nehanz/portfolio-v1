"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUserTie,
  FaTag,
} from "react-icons/fa";
import Image from "next/image";

interface ProjectData {
  title: string;
  description: string;
  imageSrc?: any;
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

const PROJECT_DATA: ProjectData[] = [];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border border-transparent hover:border-white/30 transition-all duration-300 cursor-pointer bg-[var(--color-accent1)] p-6 h-full flex flex-col"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Open details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
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
    </div>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-10">
      <div
        ref={dialogRef}
        className="bg-[var(--color-accent1)] p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
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
                    className="text-white/90 text-sm px-4 py-2 border border-[var(--color-accent2)]"
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
          <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
            {project.gitLink && (
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[var(--color-accent2)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] text-white px-5 py-2.5 transition-colors duration-300"
              >
                <FaGithub /> View Code
              </a>
            )}
            {project.siteLink && (
              <a
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[var(--color-accent2)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] text-white px-5 py-2.5 transition-colors duration-300"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectSection: React.FC<{ category: string }> = ({ category }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const filteredProjects = PROJECT_DATA.filter(
    (project) => project.category === category
  );

  if (filteredProjects.length === 0) return null;

  return (
    <section className="mb-10">
      <p className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
        {category}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      <ProjectDetailsDialog
        project={selectedProject!}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default function Projects() {
  const categories = Array.from(new Set(PROJECT_DATA.map((p) => p.category)));
  return (
    <div className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="w-full p-10">
        <div className="relative">
          <section className="mb-10">
            <h1 className="text-5xl font-bold text-[var(--color-primary)] mb-10 mt-5">
              Projects
            </h1>
            {categories.map((category) => (
              <ProjectSection key={category} category={category} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
