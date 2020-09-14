import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoaderContainer = styled.div`
  position: relative;

  width: 120px;

  border-bottom: 4px solid ${props => props.theme.colors.accent};

  &:after,
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 10px;
    width: 4px;
    background-color: ${props => props.theme.colors.accent};
  }

  &:after {
    left: 0px;
  }

  &:before {
    right: 0px;
  }
`;

const loaderVariants = {
  animation: {
    x: [4, 100],
    y: [2, -40],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.6,
      },
      y: {
        yoyo: Infinity,
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  },
};

export const Ball = styled(motion.div).attrs(() => ({
  variants: loaderVariants,
  animate: 'animation',
}))`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.accent};
`;
