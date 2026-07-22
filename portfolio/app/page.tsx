import Projects from "@/components/project/Projects";
import Journey from "@/components/journey/Journey";
import Contact from "@/components/contact/Contact";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-white">

      <Background />

      <Navbar />

      <Hero />

      <Projects />

      <Journey />

      <Contact />

    </main>
  );
}