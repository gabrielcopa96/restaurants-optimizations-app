import { createSlice } from "@reduxjs/toolkit";

interface AlertAuth {
    render: boolean,
    alert :[string,[string]]  
}

export const initialAlertState:AlertAuth ={
    render: false,
    alert:["",[""]]
}


export const alertAuthSlice = createSlice({
name:"user",
initialState:initialAlertState,
reducers:{
    setearAlertRemover: (state)=>{
        state.render = false,
        state.alert = ["",[""]]   
        
    },
    setearAlertRender: (state,action)=>{
        state.render = true,
        state.alert = action.payload
    }
}   
});

export const {setearAlertRender,setearAlertRemover} = alertAuthSlice.actions;

export default alertAuthSlice.reducer