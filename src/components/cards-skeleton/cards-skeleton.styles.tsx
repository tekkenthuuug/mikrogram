import styled from 'styled-components';

export const SkeletonCardContainer = styled.div`
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  position: relative;
  overflow: hidden;

  width: 350px;
  height: 420px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -420px;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${props => props.theme.colors.loadingGradientColor} 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes load {
    from {
      top: -420px;
    }
    to {
      top: 100%;
    }
  }
`;
