import React from "react";
import  DeleteAllUser from "./DeleteAllUser";
import { FakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch=useDispatch();
  const AddNewUser=(fakename)=>{
      dispatch(addUser(fakename));
  }
  return (
    <div className="container py-5">
      <div className="content">
        <div className="admin-table text-center d-flex justify-content-between">
          <div className="admin-subtitle"><h3>List of User Details</h3></div>
          <button className="btn btn-primary add-btn" onClick={()=>AddNewUser(FakeUserData())}>Add New Users</button>
        </div>
        <ul className="text-center list-unstyled user_detail">
          <DisplayUsers/>
        </ul>
        <DeleteAllUser />
      </div>
      </div>
  );
};

export default UserDetails;