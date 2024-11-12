import { useParams, Link } from "react-router-dom";

const Disease = ({diseases}) => {
    const { id } = useParams();
    const disease = diseases.filter(disease => disease._id === id)[0];
  return (
    <article>
        <h2>Deskripsi</h2>
        <p>{disease.description}</p>
        <h2>Gejala</h2>
        <ul>
        {disease.sympthoms.map((sympthom, i) => (
            <li key={i}>{sympthom}</li>
        ))} 
        </ul>
        <Link to="/expert">back</Link>
    </article>
  )
}

export default Disease