import React from 'react';

export default function ReviewCard (props) {


  return (
    <div>
      <h3>{props.review.reviewer_name} at {props.review.date}</h3>
      <p>Rating: {props.review.rating} stars</p>
      <p>Summary: {props.review.summary}</p>
      <p>Body: {props.review.body}</p>
      <p>Recommend: {props.review.recommend ? "Yes" : "No"}</p>
      <p>Helpful({props.review.helpfulness})</p>
    </div>
  )

}