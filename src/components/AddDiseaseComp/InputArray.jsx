const InputArray = ({
  label,
  name,
  setInput,
  input,
  ph,
  handleInput,
  handleInputDelete,
  inputs,
  setInputs,
}) => {
  return (
    <div className="mb-6">
      {/* Label */}
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {name}
      </label>

      {/* Input Field */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          id={label}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={ph}
          autoComplete="off"
          className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          type="button"
          onClick={() => handleInput(inputs, input, setInputs, setInput)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 focus:ring focus:ring-blue-300 transition"
        >
          Tambah
        </button>
      </div>

      {/* List of Items */}
      {inputs.length > 0 && (
        <ul className="mt-4 space-y-2">
          {inputs.map((element, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-2 bg-gray-100 rounded shadow-sm"
            >
              <span className="text-gray-700">{element}</span>
              <button
                onClick={() => handleInputDelete(inputs, setInputs, element)}
                className="px-2 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputArray;
