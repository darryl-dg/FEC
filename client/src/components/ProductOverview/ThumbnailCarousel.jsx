import React, { useState } from 'react';

const ThumbnailCarousel = ({
  index, handleThumbnailClick, thumbnails = [],
}) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  let shownThumbs = [];
  if (thumbnails.length > 7) {
    if (thumbnailIndex + 7 >= thumbnails.length) {
      shownThumbs = thumbnails.slice(-7);
    } else {
      shownThumbs = thumbnails.slice(thumbnailIndex, thumbnailIndex + 7);
    }
  } else {
    shownThumbs = thumbnails;
  }

  const prevHidden = thumbnailIndex <= 0;
  const nextHidden = thumbnailIndex + 7 >= thumbnails.length;

  const handlePrevClick = () => {
    setThumbnailIndex(thumbnailIndex - 1);
  };

  const handleNextClick = () => {
    setThumbnailIndex(thumbnailIndex + 1);
  };

  const handleThumbnailClickEvents = (e) => {
    const newHighlightIndex = parseInt(e.target.dataset.id, 10) + thumbnailIndex;
    handleThumbnailClick(newHighlightIndex);

    let newIndex;
    if (thumbnails.length <= 7) {
      newIndex = 0;
    } else if (newHighlightIndex + 7 >= thumbnails.length) {
      newIndex = thumbnails.length - 7;
    } else {
      newIndex = newHighlightIndex;
    }

    setThumbnailIndex(newIndex);
  };

  return (
    <div>
      <div id="thumbnailGalleryContainer">
        <div id="thumbnailPrev" onClick={handlePrevClick} style={{ visibility: prevHidden ? 'hidden' : 'visible' }}>
          &#8963;
        </div>
        <div id="thumbnailContainer">
          {shownThumbs.map((thumbnail, idx) => (
            <div id="thumbnailImageWrapper">
              <img
                className="thumbnailImage"
                src={thumbnail}
                alt=""
                data-id={idx}
                onClick={handleThumbnailClickEvents}
                style={{ border: (index - thumbnailIndex) === idx ? '2px solid black' : 'none' }}
                key={idx}
              />
            </div>
          ))}
        </div>
        <div id="thumbnailNext" onClick={handleNextClick} hidden={nextHidden}>
          &#8964;
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
