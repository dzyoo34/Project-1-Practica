"use client";
import { useEffect, useMemo, useState } from "react";
import { CarCard, CustomFilter, SearchBar } from "@/components";
import Hero from "@/components/Hero";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";

export default function Home() {
  const [allCars, setAllCars] = useState<any[]>([]);
  const [selectedFuel, setSelectedFuel] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setIsLoading(true);
      try {
        const cars = await fetchCars();
        if (isMounted) setAllCars(cars || []);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredCars = useMemo(() => {
    return allCars.filter((car) => {
      const fuelOk = selectedFuel ? String(car.fuel_type).toLowerCase() === selectedFuel.toLowerCase() : true;
      const yearOk = selectedYear ? String(car.year) === String(selectedYear) : true;
      return fuelOk && yearOk;
    });
  }, [allCars, selectedFuel, selectedYear]);

  const isDataEmpty = !Array.isArray(filteredCars) || filteredCars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x
        padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl
            font-extrabold">Каталог машин</h1>
          <p>Подберите машину по душе!</p>
        </div>
        <div className="w-full flex items-center gap-4 flex-wrap">
          <SearchBar />
          <div className="flex items-center gap-3">
            <CustomFilter
              title="Год"
              options={yearsOfProduction}
              value={selectedYear}
              onChange={setSelectedYear}
            />
            <CustomFilter
              title="Топливо"
              options={fuels}
              value={selectedFuel}
              onChange={setSelectedFuel}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Загрузка...</h2>
          </div>
        ) : !isDataEmpty ? (
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars.map((car, index) => (
                <CarCard key={car.id || index} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Нет результатов</h2>
          </div>
        )}
      </div>
    </main>
  );
}
