import React from 'react';
import data from '../data.js'

export default function Ratings () {

function getAvgRatings() {
  let sum = 0
  let count = 0
  for(let keys in data.reviewMeta.ratings){
    sum += (data.reviewMeta.ratings[keys] * keys)
    count++
  }
  return (sum / count)
}
let avgRatings = getAvgRatings()

  return (
    <div>
      <hr />
     <h2>Ratings (will be on the side when I style it)</h2>
     <p>{avgRatings} stars is the average</p>
     <p>5 stars: {data.reviewMeta.ratings[5]}</p>
     <p>4 stars: {data.reviewMeta.ratings[4]}</p>
     <p>3 stars: {data.reviewMeta.ratings[3]}</p>
     <p>2 stars: {data.reviewMeta.ratings[2]}</p>
     <p>1 stars: {data.reviewMeta.ratings[1]}</p>
     <hr />
     <h3>Characteristics</h3>
     <p>Size is a {data.reviewMeta.characteristics.Size.value}/5</p>
     <p>Width is a {data.reviewMeta.characteristics.Width.value}/5</p>
     <p>Comfort is a {data.reviewMeta.characteristics.Comfort.value}/5</p>
    </div>
  )

}