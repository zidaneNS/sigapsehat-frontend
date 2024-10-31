import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h2>Protected</h2>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/expert">Expert</Link>
        <br />
        <Link to="/dev">Dev</Link>
    </section>
  )
}

export default Home