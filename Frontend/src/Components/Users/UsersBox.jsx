import React from "react";
import { BiNavigation } from "react-icons/bi";
import moment from "moment";
import Input from "../../Shared/Input";
import { useNavigate } from "react-router-dom";
export const UsersBox = ({
  name,
  age,
  isActive,
  key,
  updated,
  onDeleteHandler,
}) => {
  const formattedData = moment(updated).format("LLL");
  const navigate = useNavigate();
  const editUserHandler = (username) => {
    navigate("/editusers/" + username);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card w-50rem my-1rem bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              {age}{" "}
              <Input type="checkbox" checked={isActive} className="toggle" />
            </p>
            <div className="card-actions justify-end">
              <p>{formattedData}</p>
              <button
                className="btn btn-primary"
                onClick={() => editUserHandler(name)}
              >
                <BiNavigation />
              </button>
              <button
                buttonname="delete"
                className="btn btn-error"
                onClick={() => onDeleteHandler(name)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
