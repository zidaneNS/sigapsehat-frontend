import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Popup from "./Popup";

const Diagnose = () => {
    const [sympthoms, setSympthoms] = useState([]);
    const [options, setOptions] = useState([]);
    const [input, setInput] = useState('');
    const [isOK, setIsOK] = useState();
    const [isSubmit, setIsSubmit] = useState(false);
    const [refusedSymthoms, setRefusedSymthoms] = useState([]);
    const [isInvalid, setIsInvalid] = useState(false);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const getSympthoms = async () => {
            try {
                const response = await axiosPrivate.post('/disease/sympthoms', JSON.stringify({ sympthomInput: sympthoms }), {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
                if (sympthoms.includes('invalid')) {
                    const filteredSympthoms = sympthoms.filter(sympthom => sympthom !== 'invalid');
                    setSympthoms([...filteredSympthoms]);
                }

                console.log('get result: ',response.data.data);
                console.log('isSubmit value: ', isSubmit);
                setOptions(response.data.data);
                setInput(response.data.data[Math.floor(Math.random()*response.data.data.length)]);
                console.log('input', sympthoms);
            } catch (err) {
                console.error(err);
            }
        }

        getSympthoms();
    }, [isSubmit])

    useEffect(() => {
        if (isInvalid) {
            const sympthomsArray = sympthoms;
            setSympthoms([...sympthomsArray, 'invalid']);;
            setIsSubmit(prev => !prev);
            setIsInvalid(false);
        }
    }, [isInvalid])

    useEffect(() => {
        console.log('value of isOK', isOK)
        if (isOK === true) {
            console.log(options);

            setRefusedSymthoms([]);
            setIsInvalid(false);
        } else if (isOK === false) {
            const oldRefusedSymthoms = [...refusedSymthoms];
            setRefusedSymthoms([...oldRefusedSymthoms, input]);
            const availableOptions = options.filter(option => option !== input && !refusedSymthoms.includes(option));

            availableOptions.length === 0 ? setIsInvalid(true) : setInput(availableOptions[Math.floor(Math.random() * availableOptions.length)]);
            
        }
        setIsOK();
    }, [isOK])

    const addSympthom = (sympthom) => {
        const sympthomsArray = sympthoms;
        setSympthoms([...sympthomsArray, sympthom]);
        setInput('');

        setIsSubmit(prev => !prev);
    }
  return (
    <section 
      className="flex flex-col items-start bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8 rounded-lg shadow-lg mt-20 h-fit"
      style={{ width: "600px" }}
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">Diagnosa</h1>
      {options?.name ? (
        <>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Hasil Diagnosa:</h2>
          <h3 className="text-xl font-bold text-blue-600 mb-2">{options.name}</h3>
          <p className="font-semibold text-gray-800 mb-2">Gejala:</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {options.sympthoms.map((sympthom, i) => (<li key={i}>{sympthom}</li>))}
          </ul>
          <p className="font-semibold text-gray-800 mb-2">Penanganan yang harus dilakukan:</p>
          <ul className="list-disc list-inside text-gray-700">
            {options.treatment.map((treat, i) => (<li key={i}>{treat}</li>))}
          </ul>
        </>
      ) : (isInvalid ? (
        <p className="text-red-500 text-lg font-semibold">Invalid input, please try again!</p>
      ) : (
        <Popup 
          input={input}
          setIsOK={setIsOK}
          addSympthom={addSympthom}
        />
      ))}
      <Link 
        to="/home"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        Back to Home
      </Link>
    </section>
  )
}

export default Diagnose;
