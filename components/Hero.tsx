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
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle mt-5">
          Streamline your car rental experience with our effortless booking process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container relative flex-1 flex justify-end items-end">
        <div className="hero__image-overlay absolute -top-20 -right-20 w-[600px] h-[350px] bg-primary-blue rounded-full z-[-1]" />

  
        <div className="hero__image relative w-[500px] h-[300px]">
          <Image
            src="/hero.png"
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
