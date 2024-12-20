import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import AddDisease from "./AddDisease";

const Disease = ({ diseases, setUpdated }) => {
  const { id } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const disease = diseases.filter((disease) => disease._id === id)[0];
  const [isAdd, setIsAdd] = useState(false);

  const methodReq = async (name, cautions, description, sympthoms, treatment) => {
    return axiosPrivate.put(
      `disease/${disease._id}`,
      JSON.stringify({ name, cautions, description, sympthoms, treatment }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
  };

  return (
    <main className="flex-auto bg-gray-100 overflow-auto h-screen p-6">
      <article className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{disease.name}</h1>
          <button
            onClick={() => setIsAdd((prev) => !prev)}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-300 transition"
          >
            {isAdd ? "Cancel Edit" : "Edit Disease"}
          </button>
        </div>

        {!isAdd && (
          <>
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Deskripsi</h2>
              <p className="text-gray-600 leading-relaxed">{disease.description}</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Penyebab</h2>
              <ul className="list-disc list-inside text-gray-600">
                {disease.cautions.map((caution, i) => (
                  <li key={i}>{caution}</li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Gejala</h2>
              <ul className="list-disc list-inside text-gray-600">
                {disease.sympthoms.map((sympthom, i) => (
                  <li key={i}>{sympthom}</li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Penanganan</h2>
              <ul className="list-disc list-inside text-gray-600">
                {disease.treatment.map((treat, i) => (
                  <li key={i}>{treat}</li>
                ))}
              </ul>
            </section>
          </>
        )}

        {isAdd && (
          <div className="mb-6">
            <AddDisease
              setUpdated={setUpdated}
              initialName={disease.name}
              initialDescription={disease.description}
              initialCautions={disease.cautions}
              initialSympthoms={disease.sympthoms}
              initialTreatment={disease.treatment}
              methodReq={methodReq}
              setIsAdd={setIsAdd}
            />
          </div>
        )}

        <Link
          to="/home"
          className="inline-block mt-8 px-4 py-2 bg-gray-700 text-white font-semibold rounded shadow-md hover:bg-gray-800 focus:ring focus:ring-gray-500 transition"
        >
          Back
        </Link>
      </article>
    </main>
  );
};

export default Disease;
