import React from 'react';
import Ratings from './Ratings.jsx'
import ReviewCard from './ReviewCard.jsx'
import ReviewList from './ReviewList.jsx'




export default function Reviews () {
  return (
    <div>
      <h1>Ratings and Reviews</h1>
      <ReviewList />
      <Ratings />
    </div>
  )

}

