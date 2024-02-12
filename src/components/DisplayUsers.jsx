import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {

    const dispatch=useDispatch()

    const data= useSelector((state)=>{
        return state.users;
    });
    // console.log(data);
    const removeUsers=(id)=>{
        dispatch(removeUser(id))
    }
  return (
    <>
    <div className="display_user my-4">
        {
                  data.map((user,id)=>{
                    return(
                    <>
                   
                    <li key={id} className='py-3  d-flex justify-content-between px-5'>{user}
                    <i className="bi bi-trash3-fill" onClick={()=>{removeUsers(id)}}></i>
                    </li>
                    </>
                    )
                  })
        }
</div>
</>
  )
}

export default DisplayUsers
