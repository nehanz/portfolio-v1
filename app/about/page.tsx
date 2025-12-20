export default function About() {
  return (
    <div className="w-full p-15">
      <h1 className="text-5xl font-bold mb-10 text-(--color-primary)">
        About Me
      </h1>

      <div className="">
        <p className="text-lg tracking-wider text-justify mb-10">
          Hi, I'm Nehan Wijayagunarathna — a second-year Information Technology
          student at the University of Moratuwa. I'm passionate about
          understanding how systems work behind the scenes and building
          reliable, scalable applications. My experience spans full-stack
          development and DevOps, with a focus on creating production-ready
          solutions. I enjoy optimizing systems, debugging complex issues, and
          improving workflows to build efficient, practical software.
        </p>

        <p className="text-lg mb-4 tracking-wider">
          As a member of the Rotaract IT team, I contribute to software projects
          and collaborate on various initiatives. I also tutor computer science,
          helping students master programming concepts. These roles have honed
          my teamwork, communication, and problem-solving abilities. I'm always
          eager for new opportunities to learn and contribute to meaningful
          projects.
        </p>
      </div>

      <div className="relative w-fit flex justify-center items-center mx-auto mt-25 mb-25">
        <div className="absolute top-2 left-2 w-full h-full bg-(--color-primary) z-0"></div>

        <div className="relative flex flex-row gap-12 bg-(--color-accent) text-(--color-foreground) px-3 py-10 w-fit z-10 shadow-lg">
          <div className="flex flex-col items-center mx-4">
            <div className="flex flex-row items-center">
              <div className="text-(--color-primary) text-5xl font-extrabold mb-1 font-mono">
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
              <div className="text-(--color-primary) text-5xl font-extrabold mb-1 font-mono">
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

      <div>
        <p className="text-lg mt-10 tracking-wider text-justify">
          I enjoy watching{" "}
          <span className="relative cursor-pointer group mx-1.5">
            TV series
            <span
              className="absolute left-0 -bottom-0.25 w-full h-0.25 bg-current transition-all duration-700 scale-x-100 group-hover:scale-x-0 origin-left"
              aria-hidden="true"
            />
          </span>{" "}
          in my free time, traveling to explore new places, playing{" "}
          <span className="relative cursor-pointer group mx-1.5">
            video games
            <span
              className="absolute left-0 -bottom-0.25 w-full h-0.25 bg-current transition-all duration-700 scale-x-100 group-hover:scale-x-0 origin-left"
              aria-hidden="true"
            />
          </span>
          , and playing badminton
        </p>
      </div>
    </div>
  );
}
