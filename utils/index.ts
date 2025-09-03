export async function fetchCars() {
    const headers = {
	'x-rapidapi-key': '35b16b41cfmsh903f6a9dc6d6f83p19992ajsn024ffc62a031',
	'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', 
    {headers: headers,
});

const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number | string, year: number | string) => {
    const numericCityMpg = typeof city_mpg === 'string' ? parseFloat(city_mpg) : city_mpg;
    const numericYear = typeof year === 'string' ? parseInt(year) : year;
    
   
    if (isNaN(numericCityMpg) || isNaN(numericYear)) {
        console.error('Ошибка:', city_mpg, year);
        return '0'; 
    }
    
    const basePricePerDay = 70;
    const mileageFactor = 0.5;
    const ageFactor = 0.025;

    const mileageRate = numericCityMpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - numericYear) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    
    return rentalRatePerDay.toFixed(0);
};