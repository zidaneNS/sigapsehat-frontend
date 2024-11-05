import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Home = () => {
  const logout = useLogout();
  const navigate = useNavigate();

  const signOut = async () => {
    await logout();
    navigate('/');
  }
  return (
    <section>
      <h2>Protected</h2>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/expert">Expert</Link>
        <br />
        <Link to="/dev">Dev</Link>
        <br />
        <Link to="/diagnose">Diagnose</Link>

        <button onClick={signOut}>Sign Out</button>
    </section>
  )
}

export default Home