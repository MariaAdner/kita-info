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

export const StyledLogoImage = styled(Image)`
  border-radius: 20px;
  display: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  heigth: auto;
  @media (min-width: 400px) {
   float:right;
  }
  }
`;
