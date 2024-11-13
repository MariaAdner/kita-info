import styled from "styled-components";
import Image from "next/image";

export const Article = styled.article`
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  @media (min-width: 400px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`;

export const Headline = styled.h4`
  color: var(--color-headline);
  padding-left: 50px;
  @media (min-width: 400px) {
    padding-left: 150px;
  }
`;

export const Textfield = styled.div`
  padding-left: 50px;
  padding-bottom: 50px;
  @media (min-width: 400px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`;

export const StyledImage = styled(Image)`
  @media (min-width: 400px) {
    justify-content: center;
  }
`;

export const ContactSection = styled.article`
  background-color: var(--color-background1);
  color: white;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  @media (min-width: 400px) {
    display: flex;
    flex-rection: row;
    padding-left: 150px;
  }
`;

export const FoodSection = styled.div`
  padding: 20px;
  @media (min-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutUsSection = styled.article`
  background-color: var(--color-background1);
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  @media (min-width: 400px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`;
