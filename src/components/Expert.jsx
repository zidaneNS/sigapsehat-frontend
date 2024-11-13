import AddDisease from "./AddDisease";
import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Expert = ({ setUpdated, diseases }) => {
  const axiosPrivate = useAxiosPrivate();
  const [isAdd, setIsAdd] = useState(false);

  const handleDelete = async (id) => {
    if (!id) {
      console.log('id cannot empty');
      return
    }

    console.log(`disease with id ${id} will be deleted`);

    try {
      const response = await axiosPrivate.delete(`/disease/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });

      setUpdated(true);

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section>
      <h1>Expert</h1>
      {isAdd && (<AddDisease setUpdated={setUpdated} />)}
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
              <button onClick={() => handleDelete(`${disease._id}`)}>Delete</button>
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