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
        <h2 className="text-center">Admin Dashbaord</h2>
        <hr />
        <div className="admin-table text-center d-flex justify-content-between mt-5">
          <div className="admin-subtitle"><h4>List of User Details</h4></div>
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