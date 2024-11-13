import { useParams, Link } from "react-router-dom";

const Disease = ({diseases}) => {
    const { id } = useParams();
    const disease = diseases.filter(disease => disease._id === id)[0];
  return (
    <article>
        <h2>Deskripsi</h2>
        <p>{disease.description}</p>
        <br />
        <h2>Penyebab</h2>
        <ul>
        {disease.cautions.map((caution, i) => (
            <li key={i}>{caution}</li>
        ))} 
        </ul>
        <br />
        <h2>Gejala</h2>
        <ul>
        {disease.sympthoms.map((sympthom, i) => (
            <li key={i}>{sympthom}</li>
        ))} 
        </ul>
        <br />
        <h2>Penanganan</h2>
        <ul>
        {disease.treatment.map((treat, i) => (
            <li key={i}>{treat}</li>
        ))} 
        </ul>
        <br />
        <Link to="/expert">back</Link>
    </article>
  )
}

export default Disease