import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";

const AddDisease = () => {
    const axiosPrivate = useAxiosPrivate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [caution, setCaution] = useState('');
    const [sympthom, setSympthom] = useState('');
    const [treat, setTreat] = useState('');
    const [cautions, setCautions] = useState([]);
    const [sympthoms, setSympthoms] = useState([]);
    const [treatment, setTreatment] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
            if (name !== '' &&
                description !== '' &&
                cautions.length > 0 && 
                sympthoms.length > 0 &&
                treatment.length > 0
            ) {
                // try {
                //     const response = await axiosPrivate.post('disease', JSON.stringify({ name, description, cautions, sympthoms, treatment }), {
                //         headers: { 'Content-Type': 'application/json' },
                //         withCredentials: true
                //     });
        
                //     console.log(response.data);
                // } catch (err) {
                //     console.error(err);
                // }
                console.log('ok');
            }
            console.log('input field cannot empty');
    }

    const handleCaution = (e) => {
        if (caution !== '') {
            const oldCautions = cautions;
            setCautions([...oldCautions, caution]);
            setCaution('');
        } else {
            console.log('caution cannot empty');
        }
    }
    
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Input new disease</h1>
        <label htmlFor="name">Name:</label>
        <input 
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Input name of disease"
        />

        <label htmlFor="description">Description:</label>
        <input 
            type="text" 
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Input description"
        />

        <label htmlFor="cautions">Cautions:</label>
        <input 
            type="text"
            id="cautions"
            onChange={(e) => setCaution(e.target.value)}
            value={caution}
            placeholder="Input cautions"
        />
        <button onClick={(e) => handleCaution(e)}>Add caution</button>
        {cautions.length > 0 && (<ul>
            {cautions.map((element, i) => (<li key={i}>{element}</li>))}
        </ul>)}

        <button type="submit">Submit</button>
    </form>
  )
}

export default AddDisease