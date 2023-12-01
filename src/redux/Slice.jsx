import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const CalcSlice = createSlice({
    name:'calculator',
    initialState:{
        budget:0,
        depenses:[
        ]
    },
    reducers:{
        addB:(state,action)=>{
            if(action.payload ===0 || action.payload==="" ){
                alert("Enter the budget")
            }
            else{
              state.budget += action.payload;
              
            }
        },
        addD:(state,action)=>{
            state.depenses =[...state.depenses,action.payload]
        }
    }
})
export const {addB,addD} =CalcSlice.actions
export default CalcSlice.reducer