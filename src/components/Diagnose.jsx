import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Diagnose = () => {
    const [sympthoms, setSympthoms] = useState([]);
    const [options, setOptions] = useState([]);
    const [input, setInput] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const getSympthoms = async () => {
            try {
                const response = await axiosPrivate.post('/disease/sympthoms', JSON.stringify({ sympthomInput: sympthoms }), {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });

                console.log(response.data.data);
                setOptions(response.data.data);
            } catch (err) {
                console.error(err);
            }
        }

        getSympthoms();
    }, [isSubmit])

    useEffect(() => {
        console.log(sympthoms);
    }, [sympthoms])

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
        ) : (
            <>
                <label htmlFor="input">Input</label>
                <input 
                    type="text" 
                    value={input}
                    readOnly
                    placeholder="Choose sympthom options below"
                />
        
                <button onClick={() => addSympthom(input)}>Submit</button>
            
                {options.map((option, i) => (
                    <div key={i}>
                        <br/>
                        <button onClick={() => setInput(option)} >
                            {option}
                        </button>
                    </div>
                ))}
            </>
        )}
        <Link to="/home">Home</Link>
    </section>
  )
}

export default Diagnose