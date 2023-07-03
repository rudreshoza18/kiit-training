import React from "react";
import { useParams } from "react-router-dom";
const UserEdit = () => {
  const params = useParams();
  console.log(params.username);
  return <div>UserEdit {params.username}</div>;
};

export default UserEdit;
