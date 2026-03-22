import Hero from "@/components/sections/Hero";
import Section1Projects from "@/components/sections/Section1Projects";
import Section2Services from "@/components/sections/Section2Services";
import Section3Definition from "@/components/sections/Section3Definition";
import SectionApp from "@/components/sections/SectionApp";
import Section4Testimonials from "@/components/sections/Section4Testimonials";
import Section5Contact from "@/components/sections/Section5Contact";

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        backgroundColor: "#070707",
        overflowX: "hidden",
      }}
    >
      <Hero />
      <Section1Projects />
      <Section2Services />
      <Section3Definition />
      <SectionApp />
      <Section4Testimonials />
      <Section5Contact />
    </main>
  );
}
