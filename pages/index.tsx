const Home: React.FC = () => {
  return (
    <div
      className={`mt-6 bg-cover bg-center relative bg-no-repeat 
        w-[90%] m-auto h-[300] lg:h-[350] rounded-3xl`}
      style={{ backgroundImage: "url('/assets/background-image.jpg')" }}
    >
      <div className="text-white absolute text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h2 className="font-bold lg:text-4 md:text-2xl text-lg xl pb-3">
          Find your favourite <br /> place here!
        </h2>
        <p className="md:text-xs text-[8px]">
          The best prices for over 2 million properties worldwide
        </p>
      </div>
    </div>
  );
};

export default Home;
