import styled from "styled-components";

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
