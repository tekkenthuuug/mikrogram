import React from 'react';

import { SkeletonCardContainer } from './cards-skeleton.styles';

interface CardProps {}

const CardSkeleton: React.FC<
  CardProps & React.HTMLAttributes<HTMLDivElement>
> = props => {
  return <SkeletonCardContainer {...props}></SkeletonCardContainer>;
};

interface CardsProps {
  numberOfCards?: number;
}

const CardsSkeleton: React.FC<
  CardsProps & React.HTMLAttributes<HTMLDivElement>
> = ({ numberOfCards = 8, ...props }) => {
  let cards: JSX.Element[] = [];

  for (let i = 0; i < numberOfCards; i++) {
    cards.push(<CardSkeleton key={i} {...props} />);
  }

  return <>{cards}</>;
};

export default CardsSkeleton;
