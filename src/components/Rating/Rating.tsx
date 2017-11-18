import React from 'react';

import ratingGenerator from './ratingGenerator';
import { Rating } from './styles';

interface RatingProps {
    rating: number;
}

export default ({ rating }: RatingProps): JSX.Element => {
    const ratingNum = Number(rating);
    return (
        <Rating>{ratingGenerator(ratingNum)}</Rating>
    );
};
 