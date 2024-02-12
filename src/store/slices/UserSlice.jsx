import { createSlice } from "@reduxjs/toolkit";

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
            state.splice(action.payload, state.length)
        }
    },
});
console.log(userSlice.actions)

export const { addUser, removeUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;