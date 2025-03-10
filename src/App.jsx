// import './App.css'
import AboutMeMain from './assets/components/aboutMeSection/AboutMeMain';
import ContactMeMain from './assets/components/contactMeSection/ContactMeMain';
import FooterMain from './assets/components/footer/FooterMain';
// import HelperSection from './assets/components/HelperSection';
import HeroGradient from './assets/components/heroSection/HeroGradient';
import HeroMain from './assets/components/heroSection/HeroMain';
import SubHerosection from './assets/components/heroSection/SubHerosection';
import NavbarMain from './assets/components/navbar/NavbarMain';
import ProjectsMain from './assets/components/projectsSection/ProjectsMain';
import SkillsMain from './assets/components/skillsSection/SkillsMain';
import SubSkills from './assets/components/skillsSection/SubSkills';

function App() {
  return (
  <main className="font-body">
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHerosection/>
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills />
    <ProjectsMain/>
    <ContactMeMain/>
    <FooterMain/>
    {/* <HelperSection/> */}
    </main>
  );
}

export default App;
