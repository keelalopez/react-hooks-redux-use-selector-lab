import React from "react";
// IMPORT THE HOOK
import { useSelector } from "react-redux";

function Users() {
  // CALL HOOK INSIDE COMPONENT AND SAVE
  const storeState = useSelector (state => state)

  // SAVES USERS ARRAY USING THE STORESTATE VARIABLE
  const users = storeState.users

  // COUNTS USERS
  const userCount = useSelector((state) => state.users.length);
  
  return (
    <div>

      <ul>
        {users.map((u) => (
          <li key={u.username}>{u.username}</li>
        ))}
      </ul>
      Total Users: {userCount}
    </div>
  );
}

export default Users;
