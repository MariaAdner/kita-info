import styled from "styled-components";
import Image from "next/image";

export const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
  @media (min-width: 450px) {
    padding-left: 200px;
    padding-right: 200px;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    padding-left: 300px;
    padding-right: 300px;
    flex-direction: row;
  }
`;

export const WelcomeImage = styled(Image)`
  border-radius: 200px;
  margin-top: 20px;
  @media (min-width: 450px) {
    margin-left: 20px;
  }
  @media (min-width: 1200px) {
    margin-left: 20px;
  }
`;

export const ImageSection = styled.div`
  background-color: var(--color-background1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 450px) {
    width: 100%;
  }
`;

export const Textfield = styled.div`
  padding-left: 50px;
  padding-bottom: 50px;
  @media (min-width: 450px) {
    padding-left: 200px;
    padding-right: 150px;
  }
  @media (min-width: 1200px) {
    padding-left: 300px;
    padding-right: 150px;
  }
`;

export const FoodSection = styled.div`
  padding: 50px;
  @media (min-width: 450px) {
    display: flex;
    flex-direction: row;
    padding-left: 200px;
    padding-right: 200px;
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    padding-left: 300px;
    padding-right: 300px;
  }
`;

export const FoodImage = styled(Image)`
  @media (min-width: 450px) {
    padding-right: 50px;
  }
`;

export const AboutUsSection = styled.article`
  background-color: var(--color-background1);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  @media (min-width: 450px) {
    flex-direction: column;
    padding-left: 200px;
    padding-right: 200px;
  }
  @media (min-width: 1200px) {
    flex-direction: column;
    padding-left: 300px;
    padding-right: 300px;
  }
`;

export const AboutUsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 450px) {
    display: flex;
    flex-direction: row;
  }
`;

export const AboutImage = styled(Image)`
  object-fit: cover;
  @media (min-width: 450px) {
    padding-right: 50px;
    padding-top: 50px;
  }
`;

export const ContactSection = styled.article`
  background-color: var(--color-background1);
  color: white;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;

  @media (min-width: 450px) {
    display: flex;
    flex-rection: row;
    justify-content: center;
    padding-left: 100px;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`;

export const ContactListElement = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.span`
  display: inline-block;
  width: 40px;
  text-align: center;
  padding-right: 20px;
`;

export const StyledContactLink = styled.a`
  color: white;
  text-decoration: none;
`;

export const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 400px;

  @media (min-width: 450px) {
    margin: 20px;
  }
`;
