import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import AddDisease from "./AddDisease";

const Disease = ({ diseases, setUpdated }) => {
    const { id } = useParams();
    const axiosPrivate = useAxiosPrivate();
    const disease = diseases.filter(disease => disease._id === id)[0];
    const [isEdit, setIsEdit] = useState(false);

    const methodReq = async (name, cautions, description, sympthoms, treatment) => {
        return axiosPrivate.put(`disease/${disease._id}`, JSON.stringify({ name, cautions, description, sympthoms, treatment }), {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        });
    }
  return (
    <article>
        <button onClick={() => setIsEdit(prev => !prev)}>Edit penyakit</button>
        <h2>Deskripsi</h2>
        {!isEdit && (
            <>
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
            </>
        )}
        {isEdit && 
            <AddDisease
                setUpdated={setUpdated} 
                initialName={disease.name}
                initialDescription={disease.description}
                initialCautions={disease.cautions}
                initialSympthoms={disease.sympthoms}
                initialTreatment={disease.treatment}
                methodReq={methodReq}
            />
        }
        
        <Link to="/expert">back</Link>
    </article>
  )
}

export default Disease