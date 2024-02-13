import { createSlice } from "@reduxjs/toolkit";
// import { deleteUser } from "../actions";

const userSlice= createSlice({
    name:"user",
    initialState:[],
    reducers: {
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload, 1)
        },
        deleteUser(state,action){
              // return []
            state.splice(action.payload, state.length)
        }
    },
    // extraReducers(builder) {
    //     builder.addCase(deleteUser,() => {
    //         return []
    //     });
    // }
});
console.log(userSlice.actions)

export const { addUser, removeUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;