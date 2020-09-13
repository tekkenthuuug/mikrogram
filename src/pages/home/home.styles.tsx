import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: ${props => props.theme.fonts.primary};

  padding-bottom: 32px;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: 50px;
`;

export const Items = styled(motion.div)`
  margin-top: 22px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;
