import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { PostWithOwner } from '../../types';

import {
  PostCardContainer,
  Image,
  PostCardVariants,
  OwnerContainer,
  OwnerImg,
  OwnerNameLink,
  InteractionsContainer,
} from './post-card.styles';

interface Props {
  postData: PostWithOwner;
  layoutId?: string;
  withAnimation?: boolean;
}

const PostCard: React.FC<Props> = ({
  postData,
  layoutId,
  withAnimation = false,
}) => {
  const { owner, imageURL, ownerId } = postData;

  return (
    <PostCardContainer
      variants={withAnimation ? PostCardVariants : undefined}
      initial='hidden'
      animate='visible'
      layoutId={layoutId}
    >
      <OwnerContainer>
        <Link to={`${ROUTES.profile}/${ownerId}`}>
          <OwnerImg src={owner.photoURL} />
        </Link>
        <OwnerNameLink to={`${ROUTES.profile}/${ownerId}`}>
          {owner.displayName}
        </OwnerNameLink>
      </OwnerContainer>
      <Link to={`${ROUTES.post}/${postData.id}`}>
        <Image src={imageURL} />
      </Link>
      <InteractionsContainer></InteractionsContainer>
    </PostCardContainer>
  );
};

export default PostCard;
