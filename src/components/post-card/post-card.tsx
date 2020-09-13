import React from 'react';
import { Post } from '../../types';

import { PostCardContainer, Image, PostCardVariants } from './post-card.styles';

interface Props {
  postData: Post;
  layoutId?: string;
  withAnimation?: boolean;
}

const PostCard: React.FC<Props> = ({
  postData,
  layoutId,
  withAnimation = false,
}) => {
  return (
    <PostCardContainer
      variants={withAnimation ? PostCardVariants : undefined}
      initial='hidden'
      animate='visible'
      layoutId={layoutId}
    >
      <Image src={postData.imageURL} />
    </PostCardContainer>
  );
};

export default PostCard;
