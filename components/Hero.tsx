"use client";

import Image from "next/image";
import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Найди, закажи, арендуй машину быстро и легко!
        </h1>

        <p className="hero__subtitle mt-5">
          Оптимизируйте процесс аренды автомобиля с помощью нашего простого процесса бронирования.
        </p>

        <CustomButton
          title="Найти машины"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container relative flex-1 flex justify-end items-end">
        <div className="hero__image-overlay absolute -top-20 -right-20 w-[600px] h-[350px] bg-primary-blue rounded-full z-[-1]" />

  
        <div className="hero__image relative w-[500px] h-[300px]">
          <Image
            src="/12.png"
            alt="hero"
            width={500}
            height={300}
            className="object-contain"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
