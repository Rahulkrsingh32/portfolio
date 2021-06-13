import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center >
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi! I'm RAHUL KR. SINGH and I'm a student Persuing Btech degree in Computer Science branch from ITER, SOA UNIVERSITY, BHUBNESWAR.
      </SectionText>
      <Button ><Link href="#about" >Learn More</Link></Button>
    </LeftSection>
  </Section>
);

export default Hero;