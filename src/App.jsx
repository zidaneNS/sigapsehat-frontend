import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import LinkPage from "./components/LinkPage";
import RequireAuth from "./components/RequireAuth";
import Home from "./components/Home";
import Expert from "./components/Expert";
import Disease from "./components/Disease";
import Dev from "./components/Dev";
import Diagnose from "./components/Diagnose";
import PersistLogin from "./components/PersistLogin";
import Unauthorized from "./components/Unauthorized";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import LandingPage from "./components/LandingPage";

const ROLES = {
  User: 2001,
  Expert: 2002,
  Dev: 2003
}

function App() {
  const axiosPrivate = useAxiosPrivate();
  const [diseases, setDiseases] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const getDiseases = async () => {
      try {
        const response = await axiosPrivate.get('/disease', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        });

        console.log('result : ',response.data);
        setDiseases(response.data.data);
        
      } catch (err) {
        console.error(err);
      }
    }

    if (updated) {
      getDiseases();
      setUpdated(false);
    }
  }, [updated])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login setUpdated={setUpdated} />}/>
        <Route path="landing_page" element={<LandingPage />}/>
        <Route path="/" element={<LinkPage />}/>

        {/* Protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="home" element={<Home 
              setUpdated={setUpdated}
              diseases={diseases}
            />}/>
            <Route element={<RequireAuth allowedRoles={[ROLES.Expert, ROLES.Dev]} />}>
              <Route path="expert" element={<Expert
                diseases={diseases}
                setUpdated={setUpdated}
              />}/>
              <Route path=":id" element={<Disease
                diseases={diseases}
                setUpdated={setUpdated}
              />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Dev]} />}>
              <Route path="dev" element={<Dev />}/>
            </Route>
            <Route path="diagnose" element={<Diagnose />} />
          </Route>
        </Route>
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>
    </Routes>
  )
}

export default App;
