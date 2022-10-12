
export interface initialCountries {
    countryName:Response | null
    casesConfirmed:Response | null
    isGettingData: boolean
}

export interface Date {
    [key:string]: number;
}

export interface Country {
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
    dates:               Date
}

export interface CountryResponse {
    All?: Country
}

export interface CountriesResponse {
    [key:string]:CountryResponse
}

export type Response = CountryResponse & CountriesResponse