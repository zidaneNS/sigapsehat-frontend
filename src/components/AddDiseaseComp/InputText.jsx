const InputText = ({ name, label, setInput, input, ph }) => {
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
      <input
        type="text"
        id={label}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder={ph}
        autoComplete="off"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition"
      />
    </div>
  );
};

export default InputText;
