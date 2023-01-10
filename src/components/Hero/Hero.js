import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Span } from '../Header/HeaderStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center >
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi! I'm RAHUL KR. SINGH and I'm currently working as Full Stack Java Developer at Virtusa Pvt Ltd. I've Persued Btech degree in Computer Science branch from ITER, SOA UNIVERSITY, BHUBNESWAR.
      </SectionText>
      <Button ><Link href="#about" ><Span>Learn more</Span></Link></Button>
    </LeftSection>
  </Section>
);

export default Hero;