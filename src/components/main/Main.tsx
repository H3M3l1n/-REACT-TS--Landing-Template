import SectionHero from '../sectionhero/SectionHero';
import SectionAbout from '../sectionabout/SectionAbout';
import SectionProducts from '../sectionproducts/SectionProducts';
import SectionSignUp from '../sectionsignup/SectionSignUp';
import './Main.sass';

const Main = () => {
  return (
    <main id="main" className="main">
      <SectionHero />
      <SectionAbout />
      <SectionProducts />
      <SectionSignUp />
    </main>
  );
};

export default Main;
