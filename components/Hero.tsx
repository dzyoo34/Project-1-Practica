import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Продажа и покупка автомобилей с парковки в Бельцах.
          Покупка авто в кредит или лизинг на выгодных условиях.
        </h1>
        <p className="hero__subtitle">
          Мечтай глобально и раскрась эту мечту яркими красками с нашими машинами!
        </p>
        <button className="hero__button">Найти машину</button>
      </div>

      
      <div className="hero__image-container">
        <div className="hero__image">
          <Image 
            src="/hero.png" 
            alt="hero car"
            width={700}
            height={500}
            className="object-contain relative z-10 transform scale-x-[-1]"
            priority
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;