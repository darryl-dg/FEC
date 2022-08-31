import React from 'react';
import ReviewCard from './ReviewCard.jsx'
import data from '../data.js'


export default function ReviewList () {

  const handleReviewCards = data.reviewData.results.map(reviewItem => {
    return <div> <hr /> <ReviewCard review={reviewItem} /> </div>
  })



  return (
    <div>
      <h2>This is the Review List for product {data.reviewData.product}! There are {data.reviewData.results.length} reviews: </h2>
      {handleReviewCards}
      <button>More reviews</button>
      <button>Add a review +</button>
    </div>
  )

}