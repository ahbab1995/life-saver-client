import React from "react";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
import Userlist from "./Userlist";

const User = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <Userlist key={user._id} index={index} user={user} refetch={refetch}></Userlist>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
