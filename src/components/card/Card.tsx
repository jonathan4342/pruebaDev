import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import * as SC from './Car.Styled';

export const Card = () => {
    const { countryName,casesConfirmed} = useSelector((state: RootState) => state.countrySlice)

    if (!(countryName?.All)) {
        return (
            <SC.ContCard gap='1rem'>
                <SC.Error>The entered name is missing or misspelled</SC.Error>
                <SC.Error>*Could you try capitalizing the first letter?</SC.Error>
            </SC.ContCard>
        )
    }
    const dead: number[] = []
    const confirmedCases: number[] = []

    for (let clave in countryName?.All.dates) {
        dead.push(countryName?.All.dates[clave])
    }
    for (let i in casesConfirmed?.All.dates) {
        confirmedCases.push(casesConfirmed?.All.dates[i] as number)
    }
    return (
        <SC.ContCard>
            <SC.CardData>
                <SC.Data>
                    <h1>{countryName?.All.country}</h1>
                </SC.Data>
                <SC.Data>
                    <span>Continent: {countryName?.All.continent}</span>
                    <span>Population: {countryName?.All.population}</span>
                    <span>Country area: {countryName?.All.sq_km_area} m<sup>2</sup></span>
                    <span>Life expectancy: {countryName?.All.life_expectancy} Años</span>
                </SC.Data>
                <SC.Data>
                    <span>Number of current deaths: {dead[0]} dead</span>
                    <span>number of confirmed cases : {confirmedCases[0]} dead</span>
                </SC.Data>
            </SC.CardData>
        </SC.ContCard>
    )
}
