import styled from "styled-components";
import Image from "next/image";

export const StyledEmbla = styled.div`
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 100%;
`;

export const StyledViewport = styled.div`
  overflow: hidden;
`;

export const StyledEmblaContainer = styled.div`
  display: flex;
  margin-left: calc(var(--slide-spacing) * -1);
  width: 450px;
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
  @media (min-width: 450px) {
    width: 500px;
    height: 380px;
  }
`;

export const EmblaButtonPrev = styled.button`
  background-color: var(--color-background1);
  color: white;
  border-color: var(--color-background1);
  border-radius: 5px;
  border: none;
`;

export const EmblaButtonNext = styled.button`
  background-color: var(--color-background1);
  color: white;
  border-color: var(--color-background1);
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
