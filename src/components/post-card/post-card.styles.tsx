import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OwnerContainer = styled.div`
  position: absolute;
  top: -60px;
  left: 0;

  display: flex;
  align-items: center;

  height: 60px;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.6) 75%,
    rgba(0, 0, 0, 0)
  );

  padding: 0 15px 10px 15px;

  transition: top 0.15s ease;
`;

export const OwnerImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;

  margin-top: 4px;

  border: 2px solid ${props => props.theme.colors.accent};
`;

export const OwnerNameLink = styled(Link)`
  font-size: 14px;
  margin-left: 8px;

  color: #fff;
`;

export const InteractionsContainer = styled.div`
  position: absolute;

  bottom: -60px;
  left: 0;

  height: 60px;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.6) 75%,
    rgba(0, 0, 0, 0)
  );

  transition: bottom 0.15s ease;
`;

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
  position: relative;
  width: 350px;
  height: 420px;

  background-color: ${props => props.theme.colors.placeholderBackground};

  color: #fff;

  overflow: hidden;

  &:hover {
    & > ${OwnerContainer} {
      top: 0;
    }

    & > ${InteractionsContainer} {
      bottom: 0;
    }
  }
`;
