import { Link } from "react-router-dom";

const Expert = ({diseases}) => {

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
                {disease.description.length <= 100 ? (
                  <p>{disease.description}</p>
                ) : (
                  <p>{disease.description.slice(0,100)}...</p>
                )}
                <Link to={`/${disease._id}`}>lihat lebih banyak</Link>
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