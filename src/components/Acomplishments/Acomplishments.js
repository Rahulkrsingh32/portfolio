import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'React-native Projects'},
  { number: 7, text: 'React.Js projects', },
  { number: 1, text: 'Internship', },
  { number: 1, text: 'HTML, CSS, JavaScript, Bootstrap Project', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      { data.map((card, index) => (
        <Box key={index}>
          <BoxNum> {card.number} </BoxNum>
          <BoxText> {card.text} </BoxText>

        </Box>
      )) }
    </Boxes>
  </Section>
);

export default Acomplishments;
