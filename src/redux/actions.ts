import { createAsyncThunk } from '@reduxjs/toolkit';
import { adminApi } from "../api/adminApi";
import { Response } from '../interfaces/interfaces';
import { setCountryName, setCountryNameConfirmed, setIsGettingData } from "./slice";

export const getGeneralCases = createAsyncThunk(
    'generalCases',
    async (name: string, { dispatch }) => {
        const firstRequest = adminApi.get<Response>(`/history`, {
            params: {
                country: name,
                status: 'confirmed'
            }
        })
        const secondRequest = adminApi.get<Response>(`/history`, {
            params: {
                country: name,
                status: 'deaths'
            }
        })
        dispatch(setIsGettingData(true))
        const [firstResponse,secondResponse] = await Promise.all([firstRequest, secondRequest])
        dispatch(setCountryName(firstResponse.data))
        dispatch(setCountryNameConfirmed(secondResponse.data))
        dispatch(setIsGettingData(false))
    }
)