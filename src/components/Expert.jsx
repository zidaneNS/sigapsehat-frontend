import AddDisease from "./AddDisease";
import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";

const Expert = ({diseases}) => {
  const [isAdd, setIsAdd] = useState(false);

  return (
    <section>
      <h1>Expert</h1>
      {isAdd && (<AddDisease />)}
      <button onClick={(e) => setIsAdd(prev => !prev)}>
        {isAdd ? "Close" : "Add disease"}
      </button>
      {diseases.length < 1 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {diseases.map((disease, i) => (
            <React.Fragment key={i}>
              <li>
                <h2>{disease.name}</h2>
                {disease.description.length <= 100 ? (
                  <p>{disease.description}</p>
                ) : (
                  <p>{disease.description.slice(0,100)}...</p>
                )}
                <Link to={`/${disease._id}`}>lihat lebih banyak</Link>
              </li>
              <button>Delete</button>
              <hr />
            </React.Fragment>
          ))}
        </ul>
      )}
      <Link to="/home">Home</Link>
    </section>
  )
}

export default Expert