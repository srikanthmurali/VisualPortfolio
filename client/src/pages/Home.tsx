import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResearchSection from '@/components/ResearchSection';
import SkillsSection from '@/components/SkillsSection';
import TalksSection from '@/components/PhotographySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Srikanth Murali - Data Scientist | Storyteller | AI Researcher</title>
        <meta name="description" content="Srikanth Murali is a Data Scientist with 7+ years of experience building data-driven solutions across industry verticals like HVAC, Defense, Renewable Energy, and Manufacturing." />
        <meta property="og:title" content="Srikanth Murali - Data Scientist | Storyteller | AI Researcher" />
        <meta property="og:description" content="Turning numbers into knowledge, and skeptics into believers — one algorithm at a time." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srikanthmurali.com" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ResearchSection />
      <SkillsSection />
      <PhotographySection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
