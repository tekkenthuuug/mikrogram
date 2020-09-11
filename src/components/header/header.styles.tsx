import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 32px 65px;

  #logo-cube {
    fill: ${props => props.theme.logo.cubeColor};
  }
  #logo-outer-poly {
    transition: 0.2s ease;

    fill: ${props => props.theme.logo.outerPolyColor};
  }
  #logo-inner-poly {
    fill: ${props => props.theme.logo.innerPolyColor};
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 40px;
  }
`;
