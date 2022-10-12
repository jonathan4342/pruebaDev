import React, { useState, useEffect } from 'react'
import * as SC from './Search.Styles'
import { BiSearchAlt } from 'react-icons/bi'
import { useAppDispatch } from '../../redux/store'
import { getCasesCountryName, getCasesCountryNameConfirmed } from '../../redux/actions'
import { useDebounce } from "react-haiku"
import { setCountryName } from '../../redux/slice'

export const Search = () => {

    const [input, setInput] = useState('')
    const dispatch = useAppDispatch()

    const submit=(e:any)=>{
        e.preventDefault();
        dispatch(getCasesCountryName(input))
        dispatch(getCasesCountryNameConfirmed(input))
    }
    return (
        <SC.SearchP>
            <SC.ContInput onSubmit={submit}>
                <SC.Input
                    placeholder='Search for country'
                    value={input}
                    onChange={
                        (e) => {
                            setInput(e.target.value)
                        }
                    } />
                <SC.Icon >
                    <BiSearchAlt className='icon' />
                </SC.Icon>
            </SC.ContInput>
        </SC.SearchP>
    )
}
