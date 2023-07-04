import { useEffect, useState } from "react";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import { editUser } from "../../Shared/Api/WeatherApi";
import { useNavigate } from "react-router-dom";
export const UserEditBox = ({ name, age, isActive, toggleEditing }) => {
  const [username, setUserName] = useState("");
  const [userAge, setAge] = useState("");
  const [userisActive, setisActive] = useState(false);
  useEffect(() => {
    setUserName(name);
    setAge(age);
    setisActive(isActive);
  }, [age, isActive, name, setUserName]);
  const navigate = useNavigate();
  const editUserData = async ({ username, payload }) => {
    try {
      await editUser({ username, payload });
      navigate("/users");
    } catch (error) {
      console.error(error.message);
    }
  };
  const onSubmitEditedData = () => {
    const payload = { age: userAge, isActive: userisActive };
    console.log(payload);
    editUserData({ username, payload });
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="">
          <Input
            value={username}
            disabled={toggleEditing}
            className="my-1rem"
            onChange={(e) => setUserName(e.target.value)}
            label="username"
          />
          <Input
            value={userAge}
            type={"number"}
            disabled={toggleEditing}
            className="my-1rem"
            onChange={(e) => setAge(e.target.value)}
          />
          <Input
            value={userisActive}
            className="toggle my-1rem"
            type="checkbox"
            checked={userisActive}
            onChange={(e) => setisActive(e.target.checked)}
          />
          {!toggleEditing && (
            <Button onClick={onSubmitEditedData} buttonname="submit" />
          )}
        </div>
      </div>
    </>
  );
};
