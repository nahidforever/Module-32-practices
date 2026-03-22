import React, { use } from "react";
import User from "./User";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
