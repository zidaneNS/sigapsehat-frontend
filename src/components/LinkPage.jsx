import { Link } from 'react-router-dom';

const LinkPage = () => {
  return (
    <section>
        <h1>Link Page</h1>
        <br />
        <h2>Public</h2>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <h2>Protected</h2>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/expert">Expert</Link>
        <br />
        <Link to="/dev">Dev</Link>
    </section>
  )
}

export default LinkPage