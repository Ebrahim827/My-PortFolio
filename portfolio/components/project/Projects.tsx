import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      {/* Section Heading */}

      <div className="mb-5 text-center">

        <p className="text-sm uppercase tracking-[0.4em] text-blue-400">
          Portfolio
        </p>

        <h2 className="mt-4 text-5xl md:text-6xl font-black">
          Featured Projects
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-8">
          A collection of AI, Machine Learning and Full-Stack projects I've
          built while learning, experimenting and solving real-world problems.
        </p>

      </div>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
        />
      ))}

    </section>
  );
}