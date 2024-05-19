import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.imageUrl} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.name}
            </li>
            <li>
              <strong>Film:</strong> {item.films}
            </li>
            <li>
              <strong>TV Show:</strong> {item.tvShows}
            </li>
            <li>
              <strong>Date:</strong> {item.createdAt}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
