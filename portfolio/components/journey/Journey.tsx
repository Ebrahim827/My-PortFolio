export default function Journey() {
  return (
    <section
      id="journey"
      className="mx-auto max-w-7xl px-8 py-24 scroll-mt-20"
    >
      <div className="text-center">

        <p className="text-sm uppercase tracking-[0.4em] text-blue-400">
          Career
        </p>

        <h2 className="mt-4 text-5xl md:text-6xl font-black">
          Professional Journey
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-8">
          My internships, certifications, leadership experiences, and continuous learning in AI and software development.
        </p>

      </div>

      <div className="mt-20 space-y-8">

        {/* Harvard */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-teal-500">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-teal-400">
                Certification
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                Harvard University
              </h3>

              <p className="mt-3 text-zinc-400">
                CS50's Introduction to Artificial Intelligence with Python
              </p>

            </div>

            <a
              href="https://cs50.harvard.edu/certificates/efa871f0-095f-443f-8731-d65d99ba0569"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-teal-600 px-6 py-3 font-semibold transition hover:bg-teal-500"
            >
              Verify Credential
            </a>

          </div>

        </div>

        {/* Arch Technologies */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-teal-500">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-teal-400">
                Internship
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                Arch Technologies
              </h3>

              <p className="mt-3 text-zinc-400">
                Artificial Intelligence & Machine Learning Internship
              </p>

            </div>

            <a
              href="https://www.linkedin.com/in/muhammad-ebrahim-imran-6974b0380/overlay/Position/2941245436/treasury/?profileId=ACoAAF4LrtMBGUb0MoH7g9WGQcpq_8Wfs0gd39M"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-teal-600 px-6 py-3 font-semibold transition hover:bg-teal-500"
            >
           View Certificate
          </a>

          </div>

        </div>

      </div>

    </section>
  );
}