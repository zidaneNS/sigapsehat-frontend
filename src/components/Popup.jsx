import React from "react";

const Popup = ({ input, setIsOK, addSympthom }) => {
  return (
    <div
      className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto animate-fade-in"
      style={{ width: "400px", height: "300px" }} // Ukuran tetap untuk kotak popup
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Konfirmasi Gejala</h2>
      <div className="flex flex-col items-center justify-center flex-grow">
        <p className="text-xl text-blue-600 font-semibold mb-6 text-center">
          Apakah Anda mengalami <span className="text-red-500">{input}</span>?
        </p>
      </div>
      <div className="flex gap-4 mt-auto">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          onClick={() => {
            setIsOK(true);
            addSympthom(input);
          }}
        >
          Ya
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          onClick={() => setIsOK(false)}
        >
          Tidak
        </button>
      </div>
    </div>
  );
};

export default Popup;
