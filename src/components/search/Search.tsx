import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { getGeneralCases } from '../../redux/actions'
import { setIsGettingData } from '../../redux/slice'
import { useAppDispatch } from '../../redux/store'
import * as SC from './Search.Styles'

export const Search = () => {

    const [input, setInput] = useState('')
    const dispatch = useAppDispatch()

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setIsGettingData(true))
        await dispatch(getGeneralCases(input)).unwrap()
        dispatch(setIsGettingData(false))
    }
    return (
        <SC.SearchP>
            <SC.ContInput onSubmit={submit}>
                <SC.Input
                    placeholder='Search for country'
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }} />
                <SC.Icon >
                    <BiSearchAlt className='icon' />
                </SC.Icon>
            </SC.ContInput>
        </SC.SearchP>
    )
}
