import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRefreshToken from "../hooks/useRefreshToken";
import useLogout from "../hooks/useLogout";

const Home = () => {
  const { setAuth } = useAuth();
  const refresh = useRefreshToken();
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
        <button onClick={refresh}>Refresh</button>

        <button onClick={signOut}>Sign Out</button>
    </section>
  )
}

export default Home