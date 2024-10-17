import styled from "styled-components";

export const StyledGallery = styled.div`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin: 50px;
`;
