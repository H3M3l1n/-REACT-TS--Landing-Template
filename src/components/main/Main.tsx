import { useState } from 'react';

import Modal from '../modal/Modal';
import SectionHero from '../sectionhero/SectionHero';
import SectionAbout from '../sectionabout/SectionAbout';
import SectionProducts from '../sectionproducts/SectionProducts';
import SectionSignUp from '../sectionsignup/SectionSignUp';

import './Main.sass';

const Main = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const modalSwitch = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <main id="main" className="main">
      <SectionHero modalSwitch={modalSwitch} />
      <SectionAbout />
      <SectionProducts modalSwitch={modalSwitch} />
      <SectionSignUp />
      {modalOpen && <Modal modalSwitch={modalSwitch} />}
    </main>
  );
};

export default Main;
