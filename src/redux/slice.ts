import { createSlice } from '@reduxjs/toolkit';
import { initialCountrys } from '../interfaces/interfaces';

const initialState:initialCountrys = {
    countryName:null,
    casesConfirmed:null
}

export const countrySlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setCountryName:(initialState,{payload})=>{
            initialState.countryName=payload
        },
        setCountryNameConfirmed:(initialState,{payload})=>{
            initialState.casesConfirmed=payload
        }
    }
})

export const {setCountryName,setCountryNameConfirmed} =countrySlice.actions

export default countrySlice.reducer;