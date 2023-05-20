import styled from "styled-components";

export const Container = styled.div`
  width: 170px;
  height: 100%;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--branco);
`;

export const AboutAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  > .username {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #232323;
  }
`;

export const Avatar = styled.img``;

export const MyProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;

  > button {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
