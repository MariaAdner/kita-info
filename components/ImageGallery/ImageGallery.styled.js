import styled from "styled-components";

export const StyledGallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  justify-content: center;
  gap: 20px;
  margin: 50px;
  @media (min-width: 400px) {
    padding-left: 170px;
    padding-right: 170px;
  }
`;
