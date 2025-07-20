import React from "react";
import { PropertyProps } from "../../interfaces";
import Image from "next/image";

interface CardProps {
  property: PropertyProps;
}

const Card: React.FC<CardProps> = ({ property }) => {
  return (
    <div className="text-black max-w-sm col-span-">
      <div>
        <div className="mb-3">
          <Image
            src={property?.image}
            alt={`${property?.name} Image`}
            width={20}
            height={20}
            priority
            className="object-cover"
          />
        </div>
        <ul className="flex gap-x-1">
          {property?.category.map((category) => (
            <li
              key={category}
              className="bg-gray-50 text-[6px] rounded-full py-1 px-2"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-xs">{property?.name}</h4>{" "}
          <div className="flex items-center gap-x-1">
            <Image
              src="/assets/icons/star.png"
              alt="Rating star"
              height={10}
              width={10}
            />
            <span className="text-xs">{property?.rating}</span>
          </div>
        </div>
        <p className="text-xs">
          {property?.address.city}, {property?.address.state}{" "}
          {property?.address.country}{" "}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-x-1 border border-gray-100 text-[8px] rounded-full">
          <div className="flex items-center gap-x-0.5">
            <Image
              src="/assets/icons/bed.png"
              alt="Bed"
              height={10}
              width={10}
            />
            <span>{property?.offers.bed}</span>
          </div>
          <div className="flex items-center gap-x-0.5">
            <Image
              src="/assets/icons/bathtub.png"
              alt="Bathtub"
              height={10}
              width={10}
            />
            <span>{property?.offers.shower}</span>
          </div>
          <div className="flex items-center gap-x-0.5">
            <Image
              src="/assets/icons/people.png"
              alt="people"
              height={10}
              width={10}
            />
            <span>{property?.offers.occupants}</span>
          </div>
        </div>
        <p className="font-semibold text-xs">
          ${property?.price} <span className="text-[8px]">/n</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
