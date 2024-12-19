import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddDisease from "./AddDisease";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Loading from "./Loading";

const Expert = ({ setUpdated, diseases }) => {
  const axiosPrivate = useAxiosPrivate();
  const [isAdd, setIsAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const methodReq = async (name, cautions, description, sympthoms, treatment) => {
    return axiosPrivate.post(
      'disease',
      JSON.stringify({ name, cautions, description, sympthoms, treatment }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    if (!id) {
      console.log('id cannot be empty');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosPrivate.delete(`/disease/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      setUpdated(true);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="p-6 bg-gray-50 min-h-screen flex flex-col relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Expert Dashboard</h1>

      <button
        onClick={() => setIsAdd(true)}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-300 transition mb-6 w-fit"
      >
        Add Disease
      </button>

      {isAdd && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 flex-grow">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Add New Disease</h2>
            <AddDisease setUpdated={setUpdated} methodReq={methodReq} />
            <button
              onClick={() => setIsAdd(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded shadow-md hover:bg-red-700 focus:ring focus:ring-red-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {diseases.length < 1 ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <ul className="space-y-6">
          {diseases.map((disease, i) => (
            <React.Fragment key={i}>
              <li className="border p-4 rounded-md shadow-md bg-white">
                <h2 className="text-2xl font-bold text-gray-700">{disease.name}</h2>
                <p className="text-gray-600 mt-2">
                  {disease.description.length <= 100
                    ? disease.description
                    : `${disease.description.slice(0, 100)}...`}
                </p>
                <div className="mt-4">
                  <Link
                    to={`/${disease._id}`}
                    className="text-blue-600 hover:underline inline-block mr-4"
                  >
                    Lebih Lengkaps
                  </Link>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <button
                      onClick={() => handleDelete(`${disease._id}`)}
                      className="px-3 py-1 bg-red-600 text-white font-semibold rounded shadow-md hover:bg-red-700 focus:ring focus:ring-red-300 transition"
                    >
                      Delete
                    </button>
                  ) }
                </div>
              </li>
              <hr className="border-gray-200 my-4" />
            </React.Fragment>
          ))}
        </ul>
      )}

      <Link
        to="/home"
        className="inline-block mt-8 px-4 py-2 bg-gray-700 text-white font-semibold rounded shadow-md hover:bg-gray-800 focus:ring focus:ring-gray-500 transition w-fit"
      >
        Home
      </Link>
    </section>
  );
};

export default Expert;
