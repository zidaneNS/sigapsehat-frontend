import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Expert = () => {
  const axiosPrivate = useAxiosPrivate();
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    const getDiseases = async () => {
      try {
        const response = await axiosPrivate.get('/disease', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        });

        console.log('result : ',response.data);
        setDiseases(response.data.data);
        
      } catch (err) {
        console.error(err);
      }
    }

    getDiseases();
  }, [])

  useEffect(() => {
    console.log(diseases);
  }, [diseases])
  return (
    <section>
      <h1>Expert</h1>
      <button>Add disease</button>
      {diseases.length < 1 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {diseases.map((disease, i) => (
            <>
              <li key={i}>
                <h2>{disease.name}</h2>
                <p>{disease.description}</p>
              </li>
              <hr />
            </>
          ))}
        </ul>
      )}
      <Link to="/home">Home</Link>
    </section>
  )
}

export default Expert