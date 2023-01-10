import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked on several technologies in the web development world.
      From both Back-End to Design 
      <br />
      I've also worked on mobile App development in both Android and IOS.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size ="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, CSS, Bootstrap, Angular, HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size ="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, SpringMVC, Spring Boot, SQL, Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size ="3rem" />
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, C, C++, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
