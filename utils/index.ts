export async function fetchCars() {
    try {
        const response = await fetch(
            "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/toyota?format=json"
        );

        if (!response.ok) {
            console.error("Ошибка сети:", response.status, response.statusText);
            return getFallbackCars();
        }

        const data = await response.json();

        const cars = data.Results.slice(0, 10).map((car) => ({
            city_mpg: Math.floor(Math.random() * 15) + 25,
            class: "compact car",
            combination_mpg: Math.floor(Math.random() * 10) + 28,
            cylinders: Math.floor(Math.random() * 4) + 4,
            displacement: Math.random() * 2 + 1.5,
            drive: Math.random() > 0.5 ? "fwd" : "awd",
            fuel_type: "gas",
            highway_mpg: Math.floor(Math.random() * 20) + 30,
            make: "Toyota",
            model: car.Model_Name,
            transmission: Math.random() > 0.5 ? "automatic" : "manual",
            year: Math.floor(Math.random() * 10) + 2015,
        }));

        return cars;
    } catch (error) {
        console.error("Ошибка при загрузке API:", error);
        return getFallbackCars();
    }
}

function getFallbackCars() {
    return [
        {
            city_mpg: 32,
            class: "compact car",
            combination_mpg: 30,
            cylinders: 4,
            displacement: 1.8,
            drive: "fwd",
            fuel_type: "gas",
            highway_mpg: 41,
            make: "Toyota",
            model: "Corolla",
            transmission: "automatic",
            year: 2022,
        },
        {
            city_mpg: 28,
            class: "midsize car",
            combination_mpg: 32,
            cylinders: 4,
            displacement: 2.5,
            drive: "fwd",
            fuel_type: "gas",
            highway_mpg: 39,
            make: "Toyota",
            model: "Camry",
            transmission: "automatic",
            year: 2023,
        },
    ];
}

export const calculateCarRent = (city_mpg, year) => {
    const numericCityMpg =
        typeof city_mpg === "string" ? parseFloat(city_mpg) : city_mpg;
    const numericYear = typeof year === "string" ? parseInt(year) : year;

    if (isNaN(numericCityMpg) || isNaN(numericYear)) {
        return "50"; 
    }

    const basePricePerDay = 70;
    const mileageFactor = 0.5;
    const ageFactor = 0.025;

    const mileageRate = numericCityMpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - numericYear) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};
