import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import design from '../img/design.svg';
import game from '../img/game-dev.svg';
import intelligence from '../img/intelligence.svg';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={'About Me'} span={'About Me'} />
      <ImageSection />
      <Title title={'My Skills'} span={'My Skills'} />
      <div className="skillsContainer">
        <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'React Js'} progress={'65%'} width={'65%'} />
        <SkillsSection skill={'Node Js'} progress={'55%'} width={'55%'} />
        <SkillsSection skill={'Java'} progress={'75%'} width={'75%'} />
        <SkillsSection skill={'Spring Boot'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'PHP'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'CSS'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'GIT'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'Docker'} progress={'60%'} width={'40%'} />
        <SkillsSection skill={'Kubernetes'} progress={'40%'} width={'40%'} />
        <SkillsSection skill={'Jenkins'} progress={'50%'} width={'50%'} />
        <SkillsSection skill={'Scrum'} progress={'90%'} width={'90%'} />
      </div>
      <Title title={'Services'} span={'Services'} />
      <div className="services-container">
        <ServicesSection image={design} title={'Web Design'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} />
        <ServicesSection image={game} title={'Web Design'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} />
        <ServicesSection image={intelligence} title={'Web Design'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} />
      </div>
    </div>
  )
}

export default AboutPage; 