import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 97px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  z-index: 2;

  padding: 25px 10px;

  background: var(--branco);
  box-shadow: var(--shadow);
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .comunity-selected {
    width: 48px;
    height: 48px;
    display: flex;
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    flex-shrink: 0;

    .active {
      outline: 3px solid var(--vermelho);
    }

    > img {
      width: 100%;
      height: 100%;
    }
  }

  p {
    font-weight: 500;
    font-size: 24px;
    text-decoration-line: underline;
    color: #232323;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ComunityUsers = styled.div`
  width: 58px;
  height: 27px;
  display: flex;
  justify-content: space-between;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  white-space: nowrap;

  > img {
    width: 27px;
    height: 27px;
    position: absolute;
    outline: 3px solid var(--vermelho);
    border-radius: 5px;
  }

  img:nth-child(2) {
    left: 15px;
  }

  img:nth-child(3) {
    left: 30px;
  }
`;


export const QuantitatyAndConfigs = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const QuantitatyUsers = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;

  span {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    background: linear-gradient(90deg, #9e005d 0.05%, #ff0000 100.01%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Configs = styled.button`
  cursor: pointer;
`;
