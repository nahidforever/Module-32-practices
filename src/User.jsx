import React from "react";

const User = ({ user }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <p>Name: {user.name}</p>
      <p>Company Name: {user.company.name}</p>
      <p>City {user.address.city}</p>
    </div>
  );
};

export default User;
