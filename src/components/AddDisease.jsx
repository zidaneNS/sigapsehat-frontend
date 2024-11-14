import { useState, useEffect } from "react";
import InputText from "./AddDiseaseComp/InputText";
import InputArray from "./AddDiseaseComp/InputArray";

const AddDisease = ({ setUpdated, initialName, initialDescription, initialCautions, initialSympthoms, initialTreatment, methodReq }) => {
    const [name, setName] = useState(initialName || '');
    const [description, setDescription] = useState(initialDescription || '');
    const [caution, setCaution] = useState('');
    const [sympthom, setSympthom] = useState('');
    const [treat, setTreat] = useState('');
    const [cautions, setCautions] = useState(initialCautions || []);
    const [sympthoms, setSympthoms] = useState(initialSympthoms || []);
    const [treatment, setTreatment] = useState(initialTreatment || []);

    const handleSubmit = async (e) => {
        e.preventDefault();
            if (name !== '' &&
                description !== '' &&
                cautions.length > 0 && 
                sympthoms.length > 0 &&
                treatment.length > 0
            ) {
                try {
                    const response = await methodReq(name, cautions, description, sympthoms, treatment);
        
                    setName('');
                    setDescription('');
                    setSympthoms([]);
                    setCautions([]);
                    setTreatment([]);
                    setUpdated(true);
                    console.log(response.data);
                } catch (err) {
                    console.error(err);
                }
                console.log('result', { name, description, cautions, sympthoms, treatment });
            } else {
                console.log('input field cannot empty');
            }
    }

    const handleInput = (inputs, input, setInputs, setInput) => {
        if (input !== '') {
            const oldInputs = inputs;
            setInputs([...oldInputs, input]);
            setInput('');
        } else {
            console.log('caution cannot empty');
        }
    }

    const handleInputDelete = (inputs, setInputs, element) => {
        const newInputs = inputs.filter(input => input !== element);
        setInputs(newInputs);
    }
    
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Penyakit baru</h1>
        <InputText 
            name="Nama"
            label="name"
            setInput={setName}
            input={name}
            ph="Masukkan nama penyakit"
        />

        <InputText 
            name="Deskripsi"
            label="description"
            setInput={setDescription}
            input={description}
            ph="Masukkan deskripsi"
        />

        <InputArray 
            label="cautions"
            name="Penyebab"
            setInput={setCaution}
            input={caution}
            ph="Masukkan penyebab"
            handleInput={handleInput}
            handleInputDelete={handleInputDelete}
            inputs={cautions}
            setInputs={setCautions}
        />

        <InputArray 
            label="sympthom"
            name="Gejala"
            setInput={setSympthom}
            input={sympthom}
            ph="Masukkan gejala"
            handleInput={handleInput}
            handleInputDelete={handleInputDelete}
            inputs={sympthoms}
            setInputs={setSympthoms}
        />

        <InputArray 
            label="treatment"
            name="Penanganan"
            setInput={setTreat}
            input={treat}
            ph="Masukkan penanganan"
            handleInput={handleInput}
            handleInputDelete={handleInputDelete}
            inputs={treatment}
            setInputs={setTreatment}
        />

        <button type="submit">Submit</button>
    </form>
  )
}

export default AddDisease