import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import * as SC from './Car.Styled';

export const Card = () => {
    const { countryName } = useSelector((state: RootState) => state.countrySlice)
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
                <SC.TableData>
                    <tr>
                        <th>Fecha</th>
                        <th>Cantidad</th>
                    </tr>
                    <tr>
                        <td>{
                        }</td>
                    </tr>
                </SC.TableData>
            </SC.CardData>
        </SC.ContCard>
    )
}
