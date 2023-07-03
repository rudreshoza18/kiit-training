import React, { useState } from "react";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import { addUser } from "../../Shared/Api/WeatherApi";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userStatus, setUserStatus] = useState(false);
  const navigate = useNavigate();
  const addUserHandler = async () => {
    const payload = {
      name: username,
      age: parseInt(userAge),
      isActive: userStatus,
    };
    try {
      await addUser(payload);
      navigate("/users");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <div className="relative lg:top-52 ">
        <div className="flex justify-center my-1rem">
          <Input
            label={"name"}
            type="text"
            placeholder="name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </div>
        <div className="flex justify-center my-1rem">
          <Input
            label={"age"}
            type="number"
            placeholder="age"
            value={userAge}
            onChange={(evt) => setUserAge(evt.target.value)}
          />
        </div>
        <div className="flex justify-center my-1rem">
          <input
            type="checkbox"
            className="toggle"
            checked={userStatus}
            onChange={(evt) => setUserStatus(evt.target.checked)}
          />
        </div>
        <div className="flex justify-center my-1rem">
          <Button buttonname="add user" onClick={addUserHandler} />
        </div>
      </div>
    </div>
  );
};

export default Users;
