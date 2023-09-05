import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((previousList) => {
      return [
        ...previousList,
        {
          name: uName,
          age: uAge,
          college: uCollege,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </React.Fragment>
  );
}

export default App;
