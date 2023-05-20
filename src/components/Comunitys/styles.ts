import styled from "styled-components";

export const Container = styled.div`
  min-width: 68px;
  min-height: 100%;
  z-index: 3;

  background-color: var(--branco);
  box-shadow: var(--shadow);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 10px;
`;

export const Logo = styled.a`
  padding-bottom: 25px;
  display: flex;
`;

export const PhotoComunity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 0;
  margin-bottom: 25px;

  > div {
    width: 48px;
    height: 48px;
    display: flex;
    border-radius: 7px;
    overflow: hidden;

    &.active {
      outline: 3px solid var(--vermelho);
    }

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const AddComunity = styled.button`
  width: 48px;
  height: 48px;
  background: linear-gradient(90deg, #9e005d 0.05%, #ff0000 100.01%);
  border-radius: 5px;
`;
