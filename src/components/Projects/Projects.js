import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => ( //Add your projects to file '../../constants/constants 
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id} >
          <Img src={image} />
          <TitleContent>
            <HeaderThree title > {title} </HeaderThree>
            <Hr />
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i} >{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks target="_blank" href={visit} >Visit</ExternalLinks>
              <ExternalLinks target="_blank" href={source} >SourceCode</ExternalLinks>
            </UtilityList>
          </TitleContent>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;