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
    className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto"
    style={{ width: "600px", minHeight: "500px" }} // Tetapkan lebar dan tinggi minimum
    >
    <h1 className="text-2xl font-bold mb-4">Diagnose</h1>
    {options?.name ? (
        <>
            <h1 className="text-xl font-bold mb-10">Diagnose Result:</h1>
            <h2 className="text-lg font-medium mb-2">{options.name}</h2>
            <p className="font-semibold">Symptoms: </p>
            <ul className="list-disc list-inside mb-4">
                {options.sympthoms.map((sympthom, i) => (<li key={i}>{sympthom}</li>))}
            </ul>
            <p className="font-semibold">Treatment you should do: </p>
            <ul className="list-disc list-inside">
                {options.treatment.map((treat, i) => (<li key={i}>{treat}</li>))}
            </ul>
        </>
    ) : (isInvalid === true ? (
        <p className="error">Error input</p>
    ) : (
        <Popup 
            input={input}
            setIsOK={setIsOK}
            addSympthom={addSympthom}
        />
    ))}
    <Link 
        to="/home"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
    >
        Home
    
    </Link>
    </section>

  )
}

export default Diagnose