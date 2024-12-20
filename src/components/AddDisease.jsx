import { useState, useEffect } from "react";
import InputText from "./AddDiseaseComp/InputText";
import InputArray from "./AddDiseaseComp/InputArray";
import Loading from "./Loading";

const AddDisease = ({ setUpdated, initialName, initialDescription, initialCautions, initialSympthoms, initialTreatment, methodReq, setIsAdd }) => {
  const [name, setName] = useState(initialName || '');
  const [description, setDescription] = useState(initialDescription || '');
  const [caution, setCaution] = useState('');
  const [sympthom, setSympthom] = useState('');
  const [treat, setTreat] = useState('');
  const [cautions, setCautions] = useState(initialCautions || []);
  const [sympthoms, setSympthoms] = useState(initialSympthoms || []);
  const [treatment, setTreatment] = useState(initialTreatment || []);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      name !== '' &&
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
        setIsAdd(false);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
      console.log('result', { name, description, cautions, sympthoms, treatment });
    } else {
      console.log('input field cannot be empty');
      setIsLoading(false);
      setErrMsg('Field cannot be empty');
    }
  };

  const handleInput = (inputs, input, setInputs, setInput) => {
    if (input !== '') {
      const oldInputs = inputs;
      setInputs([...oldInputs, input]);
      setInput('');
    } else {
    }
  };

  const handleInputDelete = (inputs, setInputs, element) => {
    const newInputs = inputs.filter(input => input !== element);
    setInputs(newInputs);
  };

  useEffect(() => {
    setErrMsg('');
  }, [name, description, cautions, sympthoms, treatment]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Penyakit Baru</h1>
      
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

      <p className="error">{errMsg}</p>

      {isLoading ? (
        <Loading />
      ) : (
        <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-300 transition"
        >
          Submit
        </button>
      )}
      
    </form>
  );
};

export default AddDisease;
