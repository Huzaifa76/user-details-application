import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../store/slices/UserSlice';

const DeleteAllUser = () => {
  const dispatch =useDispatch();
  const deleteUsers=()=>{
    dispatch(deleteUser())
  }
  return (
    <>
    <div className="container">
        <div className="user_delete text-center">
    <button className='btn btn-danger' onClick={()=>{deleteUsers()}}>Clear All Users</button>
    </div>
    </div>
    </>
  )
}

export default DeleteAllUser
