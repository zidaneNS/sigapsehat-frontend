import { Link } from 'react-router-dom';

const LinkPage = () => {
  return (
    <section>
        <h1 className="font-bold">Link Page</h1>
        <br />

        {/* Public links */}
        <h2 className='font-semibold'>Public</h2>
        <hr />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <Link to="/landing_page">Landing Page</Link>

        {/* Protected links */}
        <h2 className='font-semibold mt-5'>Protected</h2>
        <hr />
        <Link to="/home">Home</Link>
        <br />
        <Link to="/expert">Expert</Link>
        <br />
        <Link to="/dev">Dev</Link>
        <br />
        <Link to="/diagnose">Diagnose</Link>
    </section>
  )
}

export default LinkPage