const InputArray = ({ label, name, setInput, input, ph, handleInput, handleInputDelete, inputs, setInputs }) => {
  return (
    <>
        <label htmlFor={label}>{name}</label>
        <input 
            type="text"
            id={label}
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder={ph}
            autoComplete="off"
        />
        <button type="button" onClick={() => handleInput(inputs, input, setInputs, setInput)}>Tambah</button>
        {inputs.length > 0 && (<ul>
            {inputs.map((element, i) => (<li key={i}>{element} <button onClick={() => handleInputDelete(inputs, setInputs, element)}>delete</button></li>))}
        </ul>)}
    </>
  )
}

export default InputArray