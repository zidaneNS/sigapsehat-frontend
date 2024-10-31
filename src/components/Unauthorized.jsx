import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
  return (
    <section>
        <h1>Unauthorized</h1>
        <br />
        <p>you dont have access to the requested page</p>
        <button onClick={goBack}>Go Back</button>
    </section>
  )
}

export default Unauthorized