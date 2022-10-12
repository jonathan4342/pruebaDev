import { createSlice } from '@reduxjs/toolkit';
import { initialCountrys } from '../interfaces/interfaces';

const initialState:initialCountrys = {
    countryName:null
}

export const countrySlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setCountryName:(initialState,{payload})=>{
            initialState.countryName=payload
        }
    }
})

export const {setCountryName} =countrySlice.actions

export default countrySlice.reducer;