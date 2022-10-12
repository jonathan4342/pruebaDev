import { useSelector } from 'react-redux'
import { Search, Navbar } from '../../components'
import { Card } from '../../components/card/Card'
import { RootState } from '../../redux/store'
import { Box, BoxDown } from './Home.Styled'
export const Home = () => {
    const {countryName}=useSelector((state:RootState) =>state.countrySlice)
    return (
        <Box>
            <Navbar />
            <BoxDown>
                <Search />
                {
                    countryName!==null?<Card />:false
                }
            </BoxDown>
        </Box>
    )
}
