import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import countrySlice from './slice'

export const store = configureStore({
    reducer: {
        countrySlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// Custom app dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()