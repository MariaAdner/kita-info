import styled from "styled-components";
import Image from "next/image";

export const StyledEmbla = styled.div`
  overflow: hidden;
`;

export const StyledEmblaContainer = styled.div`
  display: flex;
`;
export const StyledSlide = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 100%;
`;

export const StyledEmblaImage = styled(Image)`
  width: 375px;
`;
