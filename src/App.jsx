import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import LinkPage from "./components/LinkPage";
import RequireAuth from "./components/RequireAuth";
import Home from "./components/Home";
import Expert from "./components/Expert";
import Dev from "./components/Dev";
import Unauthorized from "./components/Unauthorized";
import { Routes, Route } from "react-router-dom";

const ROLES = {
  User: 2001,
  Expert: 2002,
  Dev: 2003
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
        <Route path="/" element={<LinkPage />}/>

        {/* Protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="home" element={<Home />}/>
          <Route element={<RequireAuth allowedRoles={[ROLES.Expert, ROLES.Dev]} />}>
            <Route path="expert" element={<Expert />}/>
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Dev]} />}>
            <Route path="dev" element={<Dev />}/>
          </Route>
        </Route>
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>
    </Routes>
  )
}

export default App;
