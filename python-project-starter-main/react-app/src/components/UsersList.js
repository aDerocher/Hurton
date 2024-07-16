import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// This component for Testing only
function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>User List: </h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`}>{user.email}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
