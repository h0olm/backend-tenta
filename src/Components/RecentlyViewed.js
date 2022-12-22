import React from "react";

function RecentlyViewed({ recentlyViewed, openPopup }) {
  return (
    <div className="recently-viewed" style={{ overflowX: 'scroll', overflowY: 'hidden' }}>

      <div className="recently-viewed-card">
        <ul className="recently-viewed-list">
          {recentlyViewed.map((movie) => (
            <li key={movie.id} onClick={() => openPopup(movie.id)}>
              {movie.title}
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                className="ratedImg"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecentlyViewed;
