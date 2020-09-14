import styled from 'styled-components';

export const LoadingScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 140;
  background-color: ${props => props.theme.colors.primaryBackgroundColor};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
