import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import useAuth from "../hooks/useAuth";
import Expert from "./Expert";
import { useEffect } from "react";

const Dashboard = ({ setUpdated, diseases }) => {
  const logout = useLogout();
  const navigate = useNavigate();
  const { auth } = useAuth();

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  useEffect(() => {
    console.log(auth);
  }, []);

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Sidebar onSignOut={signOut}/>
      
      {/* Main Content */}
      {auth?.roles.includes(2002) ? (
        <Expert 
          setUpdated={setUpdated}
          diseases={diseases}
        />
      ) : (
        <main className="flex-auto bg-gray-100 overflow-auto p-6 ml-64">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome, User!</h1>
          </header>
          <section className="bg-white h-full p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
            <Profile></Profile>

            {/* Mulai Diagnosa Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mulai Diagnosa</h3>
              <p className="text-gray-600 mb-6">
                Klik tombol di bawah untuk memulai proses diagnosa.
              </p>
              <Link to="/diagnose"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Mulai Diagnosa
              </Link>
            </div>
          </section>
          
        </main>
      )}
    </div>
  );
};

export default Dashboard;
