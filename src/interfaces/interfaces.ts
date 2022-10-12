
export interface initialCountrys {
    countryName:Props | null
    casesConfirmed:Props | null
}

export interface Props {
    All:All
}
export interface All {
    country:             string;
    population:          number;
    sq_km_area:          number;
    life_expectancy:     string;
    elevation_in_meters: number;
    continent:           string;
    abbreviation:        string;
    location:            string;
    iso:                 number;
    capital_city:        string;
    dates:               date
}

export interface date {
    [key:string]: number;
}