import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../Shared/Api/WeatherApi";
import { UserEditBox } from "./UserEditBox";
import Button from "../../Shared/Button";
const UserEdit = () => {
  const params = useParams();
  const [editing, setEditing] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    isActive: false,
    updated: "",
    age: "",
  });
  const username = params.username || "";
  const editHandler = () => {
    const toggleEditing = !editing;
    setEditing(toggleEditing);
    console.log(toggleEditing);
  };
  const getUserData = useCallback(async () => {
    const data = await getUser({ username });
    setUserData(data.data[0]);
    console.log(data.data[0]);
  }, [username]);
  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <>
      <div className="h-35rem">
        <div className="flex justify-center items-center">
          <UserEditBox
            name={userData.name}
            age={userData.age}
            isActive={userData.isActive}
            toggleEditing={editing}
          />
        </div>
        <div className="flex justify-center items-center">
          <Button buttonname="edit" onClick={editHandler} />
        </div>
      </div>
    </>
  );
};

export default UserEdit;
