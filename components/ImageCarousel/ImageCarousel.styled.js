import styled from "styled-components";
import Image from "next/image";

export const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 400px) {
    width: 600px;
    height: 500px;
  }
`;

export const StyledCarouselImage = styled(Image)`
  @media (min-width: 400px) {
    width: 300px;
  }
`;
