const InputText = ({ name, label, setInput, input, ph }) => {
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
    </>
  )
}

export default InputText