import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Drawer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 160;

  background-color: ${props =>
    props.theme.type === 'dark'
      ? 'rgba(0, 0, 0, 0.5)'
      : 'rgba(255, 255, 255, 0.55)'};
`;
