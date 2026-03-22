import { Suspense } from "react";
import "./App.css";
import Counter from "./Counter";
import Show_Hide from "./Show_Hide";
import Users from "./Users";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
};

function App() {
  const usersPromise = fetchUsers();
  return (
    <>
      <h2>Module 32 Practices Task</h2>

      <Counter></Counter>

      <Show_Hide></Show_Hide>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users usersPromise={usersPromise}></Users>
      </Suspense>
    </>
  );
}

export default App;
