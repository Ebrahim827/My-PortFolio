"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  technologies,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl py-1"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2">

        {/* LEFT IMAGE */}

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center"
        >
          <Image
            src={image}
            alt={title}
            width={650}
            height={520}
            priority
            className="w-full max-w-[450px] h-auto object-contain"
          />
        </motion.div>

        {/* RIGHT */}

        <div>


          <h2 className="text-4xl font-Arial(bold) tracking-tight text-zinc-100 sm:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-lg leading-6 text-zinc-400">
            {description}
          </p>

          <div className="mt-5 flex gap-4">

            <a
              href={live}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2 font-semibold hover:bg-blue-500 transition"
            >
              View Live
              <FaExternalLinkAlt />
            </a>

            <a
              href={github}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-2.5 hover:border-blue-500 transition"
            >
              <FaGithub />
              GitHub
            </a>

          </div>

          <div className="mt-5">

            <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Skills Used
            </h3>

            <div className="flex flex-wrap gap-3">

              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm hover:border-blue-500 transition"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}