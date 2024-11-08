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
    const [invalid, setInvalid] = useState(false);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const getSympthoms = async () => {
            try {
                const response = await axiosPrivate.post('/disease/sympthoms', JSON.stringify({ sympthomInput: sympthoms }), {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });

                console.log('get result: ',response.data.data);
                console.log('isSubmit value: ', isSubmit);
                setOptions(response.data.data);
                setInput(response.data.data[Math.floor(Math.random()*response.data.data.length)]);
            } catch (err) {
                console.error(err);
            }
        }

        getSympthoms();
    }, [isSubmit])

    useEffect(() => {
        console.log('sympthoms: ', sympthoms);
    }, [sympthoms])

    useEffect(() => {
        console.log('refusedSymthoms', refusedSymthoms);
        if (refusedSymthoms.length === options.length) setInvalid(true);
        console.log('invalid: ',invalid);
    }, [refusedSymthoms])

    useEffect(() => {
        console.log('value of isOK', isOK)
        if (isOK === true) {
            console.log(options);

            setRefusedSymthoms([]);
        } else if (isOK === false) {
            const oldRefusedSymthoms = [...refusedSymthoms];
            setRefusedSymthoms([...oldRefusedSymthoms, input]);
            const index = Math.floor(Math.random() * (options.length));
            console.log('index', index);
            setInput(prev => options.filter(option => option !== prev && !refusedSymthoms.includes(option))[index]);
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
    <section>
        <h1>Diagnose</h1>
        {options?.name ? (
            <h1>Success</h1>
        ) : invalid === true ? (
            <p className="error">Error input</p>
        ) : (
            <Popup 
                input={input}
                setIsOK={setIsOK}
                addSympthom={addSympthom}
            />
        )}
        <Link to="/home">Home</Link>
    </section>
  )
}

export default Diagnose