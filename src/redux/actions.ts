import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCountryName ,setCountryNameConfirmed} from "./slice";

export const getCasesCountryName = createAsyncThunk(
    'country',
    async (name: string, thunkAPI) => {
        const { dispatch } = thunkAPI;
        const { data } = await axios.get(`https://covid-api.mmediagroup.fr/v1/history?country=${name}&status=deaths`)
        dispatch(setCountryName(data))
    }
)
export const getCasesCountryNameConfirmed = createAsyncThunk(
    'country',
    async (name: string, thunkAPI) => {
        const { dispatch } = thunkAPI;
        const { data } = await axios.get(`https://covid-api.mmediagroup.fr/v1/history?country=${name}&status=confirmed`)
        dispatch(setCountryNameConfirmed(data))
    }
)