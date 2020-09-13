import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PostCardVariants = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: {
        duration: 2,
      },
    },
  },
};

export const PostCardContainer = styled(motion.article)`
  width: 350px;
  height: 420px;

  background-color: ${props => props.theme.colors.placeholderBackground};

  cursor: pointer;

  border-radius: 2px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OwnerContainer = styled.div``;
