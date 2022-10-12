import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialCountries, Response } from '../interfaces/interfaces';

const initialState: initialCountries = {
    countryName: null,
    casesConfirmed: null,
    isGettingData: false
}

export const countrySlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setCountryName: (initialState, { payload }: PayloadAction<Response>) => {
            initialState.countryName = payload
        },
        setCountryNameConfirmed: (initialState, { payload }: PayloadAction<Response>) => {
            initialState.casesConfirmed = payload
        },
        setIsGettingData: (initialState, { payload }: PayloadAction<boolean>) => {
            initialState.isGettingData = payload
        }
    }
})

export const {
    setCountryName,
    setCountryNameConfirmed,
    setIsGettingData
} = countrySlice.actions

export default countrySlice.reducer;