import styled from "styled-components";

export const StyledGallery = styled.div`
  display: grid;
  list-style: none;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin: 50px;
  padding-left: 0;
  @media (min-width: 400px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`;
