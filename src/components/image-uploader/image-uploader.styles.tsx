import styled from 'styled-components';
import { motion } from 'framer-motion';
import CustomButtonComponent from '../../components/custom-button/custom-button';

interface IProgress {
  progress: number;
}
export const CustomButton = styled(CustomButtonComponent)`
  border-radius: 50%;
  padding: 0;
  width: 50px;
  height: 50px;
  margin-top: 12px;
`;

export const ProgressContainerVariants = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    scale: 0,
    y: -100,
    transition: {
      duration: 0.1,
    },
  },
};

export const ProgressContainer = styled(motion.div)`
  position: fixed;

  top: 0px;
  left: 50%;

  width: 400px;
  padding: 20px;

  margin-left: -200px;

  background-color: rgba(0, 0, 0, 0.8);

  border-radius: 0 0 12px 12px;

  z-index: 120;

  font-weight: bold;

  font-family: ${props => props.theme.fonts.primary};
`;

export const Progress = styled.div<IProgress>`
  position: relative;
  background-color: ${props => props.theme.colors.text};
  width: 100%;
  height: 18px;
  margin-top: 12px;
  overflow: hidden;
  border-radius: 6px;

  &:before {
    position: absolute;
    content: '';
    width: ${props => props.progress + '%'};
    height: 24px;

    transition: width 0.3s ease;

    background-color: ${props => props.theme.colors.accent};
  }
`;

export const FileName = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 18px;
`;

export const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.errorColor};
  font-size: 15px;
  margin-top: 6px;
`;

export const CloseButton = styled.button`
  background-color: #4285f4;
  font-size: 16px;
  margin-top: 20px;
  padding: 4px 12px;
  font-weight: bold;
  color: #fff;
  border-radius: 12px;

  &:hover {
    background-color: blue;
  }
`;
