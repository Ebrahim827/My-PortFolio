import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-8 py-24 scroll-mt-20"
    >
      <div className="text-center">

        <p className="text-sm uppercase tracking-[0.4em] text-blue-400">
          Contact
        </p>

        <h2 className="mt-4 text-5xl md:text-6xl font-black">
          Let's Connect
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I'm always open to internships, freelance projects, collaborations,
          or simply connecting with fellow developers. Feel free to reach out!
        </p>

      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-35">

        {/* Email */}

        <a
          href="mailto:muhammadebrahimimran7@gmail.com"
          className="flex items-center gap-4 rounded-md border border-amber-400/30 bg-amber-400/10 px-8 py-5 transition duration-300 hover:-translate-y-1 hover:bg-amber-400/20"
        >
          <FaEnvelope className="text-3xl text-[#FFC107]" />
          <span className="text-lg font-medium text-white">
            Email
          </span>
        </a>

        {/* GitHub */}

        <a
          href="https://github.com/Ebrahim827"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-md border border-zinc-400/30 bg-zinc-400/10 px-8 py-5 transition duration-300 hover:-translate-y-1 hover:bg-zinc-400/20"
        >
          <FaGithub className="text-3xl text-zinc-200" />
          <span className="text-lg font-medium text-white">
            GitHub
          </span>
        </a>

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/muhammad-ebrahim-imran-6974b0380/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-md border border-blue-500/30 bg-blue-500/10 px-8 py-5 transition duration-300 hover:-translate-y-1 hover:bg-blue-500/20"
        >
          <FaLinkedin className="text-3xl text-[#0A66C2]" />
          <span className="text-lg font-medium text-white">
            LinkedIn
          </span>
        </a>

      </div>

      <p className="mt-16 text-left text-sm text-zinc-500">
        © 2026 Muhammad Ebrahim Imran. All rights reserved.
      </p>

    </section>
  );
}