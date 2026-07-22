export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">

      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-8">

        <h1 className="text-2xl font-bold tracking-widest">
          MEI
        </h1>

        <div className="hidden gap-10 text-sm text-gray-300 md:flex">

          <a href="#about" className="transition hover:text-teal-400">
            About
          </a>

          <a href="#projects" className="transition hover:text-teal-400">
            Projects
          </a>

         <a href="#journey" className="transition hover:text-teal-400">
            Professional Journey
         </a>

          <a href="#contact" className="transition hover:text-teal-400">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}