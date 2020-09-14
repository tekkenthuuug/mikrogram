import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimateSharedLayout } from 'framer-motion';
import ImageUploader from '../../components/image-uploader/image-uploader';
import PostCard from '../../components/post-card/post-card';
import { listenForImageCollection } from '../../firebase/firestore';
import { PostWithOwner } from '../../types';

import { HomeContainer, Heading, Items } from './home.styles';
import { CacheContext } from '../../context/cache.context';
import CardsSkeleton from '../../components/cards-skeleton/cards-skeleton';

interface Props {}

const Home: React.FC<Props> = () => {
  const { cache, setCache } = useContext(CacheContext)!;

  const { t } = useTranslation();
  const [posts, setPosts] = useState<PostWithOwner[] | null>(
    cache.posts.length ? cache.posts : null
  );
  // turns true only when layoutRef was not null and received new posts
  // doing that we animating only new posts, not initially loaded one
  const [animateCard, setAnimateCard] = useState(false);
  const layoutRef = useRef(null);

  useEffect(() => {
    const unsubscribe = listenForImageCollection(postDocs => {
      setPosts(postDocs);

      setCache('posts', postDocs);

      if (!animateCard && layoutRef) {
        setAnimateCard(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [animateCard, setCache]);

  return (
    <HomeContainer>
      <Heading>{t('latestPosts')}</Heading>
      <ImageUploader />
      {posts ? (
        <AnimateSharedLayout ref={layoutRef}>
          <Items layout>
            {posts.map(post => (
              <PostCard
                layoutId={`post-card-${post.id}`}
                key={post.id}
                postData={post}
                withAnimation={animateCard}
              />
            ))}
          </Items>
        </AnimateSharedLayout>
      ) : (
        <Items layout>
          <CardsSkeleton />
        </Items>
      )}
    </HomeContainer>
  );
};

export default Home;
