"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center justify-between px-8">

      <div className="max-w-2xl">

        <p className="text-blue-400 text-lg">
          BS Artificial Intelligence Student
        </p>

        <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
          Muhammad
          <br />
          Ebrahim Imran
        </h1>

        <div className="mt-6 text-2xl text-gray-300 h-12">

          <TypeAnimation
            sequence={[
              "I build cool AI Projects ✍️(◔◡◔) ",
              2000,

              "I create Modern Websites 💻",
              2000,

              "GO On! Explore my Portfolio 😁",
              5000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />

        </div>

        <p className="mt-8 text-lg leading-8 text-gray-400">

          Passionate about Artificial Intelligence,
          Machine Learning,
          Full Stack Development,
          and building modern digital experiences.

        </p>

        <div className="mt-10 flex gap-5">

  <a
    href="#projects"
    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="rounded-xl bg-rose-600 px-8 py-4 font-semibold text-white transition hover:bg-rose-500"
  >
    Contact Me
  </a>

</div>

        <div className="mt-10 flex gap-6 text-3xl">

          <a
            href="https://github.com/Ebrahim827"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-ebrahim-imran-6974b0380/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
           href="mailto:muhammadebrahimimran7@gmail.com"
           className="hover:text-blue-400 transition"
>
           <FaEnvelope />
          </a>

        </div>

      </div>

    </section>
  );
}