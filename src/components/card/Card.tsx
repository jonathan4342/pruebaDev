import { useMemo } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { GiDeathSkull } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { TbMap2 } from 'react-icons/tb';
import { VscPerson } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import { formatNumber } from '../../helpers/helpers';
import { RootState } from '../../redux/store';
import * as SC from './Car.Styled';

export const Card = () => {
    const { countryName, casesConfirmed } = useSelector((state: RootState) => state.countrySlice)

    const countryLastDate = useMemo(() => {
        if (!countryName?.All) return;
        const [lastDate] = Object.values(countryName.All.dates)
        return lastDate
    }, [countryName])

    const casesLastDate = useMemo(() => {
        if (!casesConfirmed?.All) return;
        const [lastDate] = Object.values(casesConfirmed.All.dates)
        return lastDate
    }, [casesConfirmed])

    if(countryName === null){
        return null
    }

    if (!(countryName?.All)) {
        return (
            <SC.ContCard gap='1rem'>
                <SC.Error>The entered name is missing or misspelled</SC.Error>
                <SC.Error>*Could you try capitalizing the first letter?</SC.Error>
            </SC.ContCard>
        )
    }

    return (
        <SC.ContCard>
            <SC.CardData>
                <SC.Data>
                    <h1>{countryName?.All.country}</h1>
                </SC.Data>
                <SC.Data>
                    <span><FaGlobeAmericas /> Continent: {countryName?.All.continent}</span>
                    <span><VscPerson /> Population: {formatNumber(countryName?.All.population)}</span>
                    <span><TbMap2 /> Country area: {formatNumber(countryName?.All.sq_km_area)} m<sup>2</sup></span>
                    <span><GoGraph /> Life expectancy: {countryName?.All.life_expectancy} Años</span>
                </SC.Data>
                <SC.Data>
                    <span><GiDeathSkull /> Number of current deaths: {formatNumber(countryLastDate)} dead</span>
                    <span>number of confirmed cases : {formatNumber(casesLastDate)} cases</span>
                </SC.Data>
            </SC.CardData>
        </SC.ContCard>
    )
}
