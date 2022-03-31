import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
`;

export const TopBarText = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  color: ${({ theme }) => theme.colors.white};
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
export const Image = styled.img`
  width: 50vw;
  height: 30vw;
  animation-name: ${rotate};
  animation-duration: 7s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  color: ${({ theme }) => theme.colors.text};
  flex-wrap: wrap;
  text-align: center;
`;
