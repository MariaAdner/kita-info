import styled from "styled-components";

export const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  heigth: 250px;
  margin: auto;
  padding-bottom: 50px;
  @media (min-width: 400px) {
    width: 600px;
    height: 500px;
  }
`;
