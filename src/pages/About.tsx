import AboutHero from "../components/about/AboutHero";
import FounderSection from "../components/about/FounderSection";
import ValuesSection from "../components/about/ValuesSection";
import LeadershipSection from "../components/about/LeadershipSection";

export default function About() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      {/* fixed header offset */}
      <div className="pt-20" />
      <AboutHero />
      <FounderSection />
      <ValuesSection />
      <LeadershipSection />
    </main>
  );
}
