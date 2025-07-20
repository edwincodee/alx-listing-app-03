import Card from "@/components/common/Card";
import Pill from "@/components/common/Pill";
import { PROPERTYLISTINGSAMPLE, filters } from "@/constants";
import { useState } from "react";

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<null | string>(null);
  const handleActiveFilter = (name: string) => {
    setActiveFilter(name === activeFilter ? null : name);
  };
  return (
    <>
      <div
        className={`mt-6 bg-cover bg-center relative bg-no-repeat 
        w-[90%] m-auto h-[300] lg:h-[480] rounded-3xl`}
        style={{ backgroundImage: "url('/assets/background-image.jpg')" }}
      >
        <div className="text-white absolute text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <h2 className="font-bold lg:text-5xl md:text-3xl text-lg xl pb-3">
            Find your favourite <br /> place here!
          </h2>
          <p className="md:text-xs text-[8px]">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </div>

      <div className="hidden md:flex my-10 items-center justify-between w-[90%] m-auto">
        <div className="flex gap-x-3 items-center">
          {filters.map((filter) => (
            <Pill
              key={filter}
              onClick={handleActiveFilter}
              name={`${filter}`}
              isActive={filter === activeFilter}
            />
          ))}
        </div>
        <div className="flex items-center gap-x-4 text-xs">
          <span className="border border-gray-100 rounded-full px-2 py-1">
            filter
          </span>
          <p className="border px-2 py-1 border-gray-100 rounded-full">
            <span className="text-gray300">Sort by:</span> Highest Price
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 mb-10 lg:grid-cols-4 md:col-span-2 w-[90%] m-auto gap-x-6 gap-y-10">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <Card property={property} key={property.name} />
        ))}
      </div>
    </>
  );
};

export default Home;
