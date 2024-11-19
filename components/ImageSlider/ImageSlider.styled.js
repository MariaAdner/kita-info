import styled from "styled-components";
import Image from "next/image";

export const StyledEmbla = styled.div`
  margin: 50px;
`;

export const StyledViewport = styled.div`
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

export const EmblaButtonPrev = styled.button`
  background-color: var(--color-main);
  color: white;
  border-color: var(--color-main);
  border-radius: 5px;
  border: none;
`;

export const EmblaButtonNext = styled.button`
  background-color: var(--color-main);
  color: white;
  border-color: var(--color-main);
  border-radius: 5px;
  border: none;
`;

export const EmblaButtonMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
  gap: 10px;
`;
