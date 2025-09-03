import { CarCard, CustomFilter, SearchBar } from "@/components";
import  Hero from "@/components/Hero";
import Image from "next/image";
import {fetchCars} from '@/utils';

export default async function Home() {
  const allCars = await fetchCars();


  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
      <main className="overflow-hidden">
        <Hero />
        <div className="mt-12 padding-x
        padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl
            font-extrabold">Car Catalogue</h1>
            <p>Exlpore the cars you might like</p>
            </div>
            <div className="home__filters">
              <SearchBar />
              <div className="home__filter-container">
            </div>
          </div>

{!isDataEmpty ? (
<section>
  <div className="home__cars-wrapper">
    {allCars?.map((car, index) => (
  <CarCard key={car.id || index} car={car} />
))}
  </div>
</section>
): (
  <div className="home__error-container">
    <h2 className="text-black text-xl font-bold">No results</h2>
    <p>{allCars?.message}</p>
  </div>
)}
        </div>
      </main>    
  );
}
