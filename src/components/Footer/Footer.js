import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:766-750-0000">766-750-0000</LinkItem>
        </LinkColumn>
        <LinkColumn>
        
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:rahulkrsingh32@gmail.com">rahulkrsingh32@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> Thats all about Me! Thank You for visiting!! </Slogan>
        </CompanyContainer>
        <SocialContainer>

        <SocialIcons href="https://www.github.com/rahulkrsingh32/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/rahul-kumar-singh-a5b45b207/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/rahulkrsingh32/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
