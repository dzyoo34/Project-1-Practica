"use client";
import { useState } from 'react'
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(city_mpg, year);
    
    const isValidRent = !isNaN(parseFloat(carRent));

    return (
        <div className="car-card group">
            {/* Контейнер для изображения с ограничениями */}
            <div className="car-card__image-container">
                <Image 
                    src="/hero.png" 
                    fill 
                    priority
                    alt={`${make} ${model}`}
                    className="car-card__image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                        e.currentTarget.src = '/car-placeholder.jpg';
                    }}
                />
            </div>

            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
                <p className="car-card__content-year">
                    {year}
                </p>
            </div>

            <div className="car-card__price">
                <span className="car-card__price-amount">
                    {isValidRent ? `$${carRent}` : 'Price unavailable'}
                </span>
                <span className="car-card__price-day">/day</span>
            </div>
            
            <div className="car-card__details">
                <div className="car-card__detail">
                    <Image src="/steering-wheel.svg" width={20} height={20} alt="Transmission" />
                    <p>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                </div>
                <div className="car-card__detail">
                    <Image src="/tire.svg" width={20} height={20} alt="Drive" />
                    <p>{drive.toUpperCase()}</p>
                </div>
                <div className="car-card__detail">
                    <Image src="/gas.svg" width={20} height={20} alt="MPG" />
                    <p>{city_mpg} MPG</p>
                </div>
            </div>
        </div>
    );
}

export default CarCard;