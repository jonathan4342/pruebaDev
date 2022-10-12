import { useSelector } from 'react-redux'
import { Navbar, Search } from '../../components'
import { Card } from '../../components/card/Card'
import { OpacityLoader } from '../../components/loaders/OpacityLoaders'
import { RootState } from '../../redux/store'
import { Box, BoxDown } from './Home.Styled'
export const Home = () => {
    const isLoading = useSelector((state: RootState) => state.countrySlice.isGettingData)

    return (
        <Box>
            <Navbar />
            <BoxDown>
                <Search />
                {
                    isLoading
                        ? <OpacityLoader/>
                        : <Card />
                }
            </BoxDown>
        </Box>
    )
}
