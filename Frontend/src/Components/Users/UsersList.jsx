import React, { useEffect, useState } from "react";
import { getUsers } from "../../Shared/Api/WeatherApi";
import { UsersBox } from "./UsersBox";
import { deleteUser } from "../../Shared/Api/WeatherApi";
const UsersList = () => {
  const [userList, setUserList] = useState([]);
  const getUsersHandler = async () => {
    try {
      const data = await getUsers();
      setUserList(data.data);
    } catch (error) {
      console.error(error.message);
      setUserList([]);
    }
  };
  const deleteUserData = async (username) => {
    try {
      await deleteUser({ username });
      window.location.reload(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  const deleteUserHandler = (username) => {
    console.log(username);
    deleteUserData(username);
  };
  useEffect(() => {
    getUsersHandler();
  }, []);
  return (
    <div>
      {!!userList &&
        userList.map((ele, i) => (
          <UsersBox
            name={ele.name}
            age={ele.age}
            isActive={ele.isActive}
            key={i}
            updated={ele.updated}
            onDeleteHandler={deleteUserHandler}
          />
        ))}
      {userList && <p>No data available</p>}
    </div>
  );
};

export default UsersList;
