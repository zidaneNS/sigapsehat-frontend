import { Link } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";

const Dev = () => {
  const [experts, setExperts] = useState();
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getExpert = async () => {
      try {
        const responseExperts = await axiosPrivate.get('/expert', {
          signal: controller.signal
        });
        const responseUsers = await axiosPrivate.get('/user', {
          signal: controller.signal
        })

        if (isMounted) {
          setExperts(responseExperts.data.data);
          setUsers(responseUsers.data.data);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getExpert();

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])
  
  return (
    <section>
      <h1>Dev</h1>
      <h2>Expert lists</h2>
      {experts?.length > 0 ? 
      (
        <ul>
          {experts.map(expert => (<li key={expert._id}>{expert.userName}</li>))}
        </ul>
      ) : 
      (
        <p>No Expert</p>
      )}

      <h2>Users lists</h2>
      {users?.length > 0 ? 
      (
        <ul>
          {users.map(user => (<li key={user._id}>{user.userName}</li>))}
        </ul>
      ) : 
      (
        <p>No Users</p>
      )}
      <Link to="/home">Home</Link>
    </section>
  )
}

export default Dev