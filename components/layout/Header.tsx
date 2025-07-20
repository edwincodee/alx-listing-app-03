import Image from "next/image";
import Link from "next/link";
import Icons from "../common/Icon";
const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-emerald-600 text-xs flex items-center py-2 gap-x-2 justify-center text-gray-100 ">
        <div>
          <Image
            src="/assets/icons/minimalistic.png"
            alt="Case Minimalistic Image"
            width={20}
            height={15}
            priority
          />
        </div>
        <p>Overseas trip? Get the latest information on travel guides</p>
        <span className="rounded-full bg-black py-1 px-2 font-semibold">
          More info
        </span>
      </div>

      <div className=" flex items-center justify-between py-5 border-b border-gray-200 w-[90%] m-auto">
        <div className="hidden md:block">
          <Link href="/">
            <Image
              src="/assets/icons/vector.png"
              alt="Logo Image"
              width={40}
              height={30}
            />
          </Link>
        </div>

        <div className="md:flex items-center border text-xs rounded-full shadow px-1 py-2 bg-white border-gray-100 max-w-lg lg:max-w-2xl mx-auto hidden">
          <div className="flex-2 px-4 border-r border-gray-200 ">
            <label className="font-medium text-gray-600 ">Location</label>
            <input
              type="text"
              placeholder="Search for destination"
              className="w-full outline-none text-xs"
            />
          </div>
          <div className="flex-1 px-4 border-r border-gray-200">
            <label className=" font-medium text-gray-600">Check in</label>
            <input
              type="text"
              placeholder="Add date"
              className="w-full outline-none "
            />
          </div>
          <div className="flex-1 px-4 border-r border-gray-200">
            <label className=" font-medium text-gray-600">Check out</label>
            <input
              type="text"
              className="w-full outline-none "
              placeholder="Add date"
            />
          </div>
          <div className="flex-1 px-4">
            <label className=" font-medium text-gray-600">People</label>
            <input
              type="number"
              placeholder="Add guest"
              className="w-full outline-none"
            />
          </div>
          <div className="pl-4">
            <button className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600">
              <Image
                src="/assets/icons/magnifer.png"
                alt="Search Icon"
                width={15}
                height={15}
              />
            </button>
          </div>
        </div>

        <div className="md:hidden flex flex-col max-w-sm border text-xs rounded-full shadow px-6 py-2 bg-white border-gray-100">
          <label className=" font-medium text-gray-600">Where to</label>
          <div className="flex justify-evenly">
            <input
              type="text"
              placeholder="Location"
              className="w-full outline-none"
            />
            <span className="pr-5 text-gray-600">&bull;</span>
            <input
              type="text"
              placeholder="Date"
              className="w-full outline-none"
            />
            <span className="pr-5 text-gray-600">&bull;</span>
            <input
              type="text"
              placeholder="Add guest"
              className="w-full outline-none"
            />
            <div className="pl-4">
              <button className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600">
                <Image
                  src="/assets/icons/magnifer.png"
                  alt="Search Icon"
                  width={15}
                  height={15}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="space-x-2 hidden lg:block">
          <button className="bg-emerald-600 rounded-full py-1 px-3 text-gray-50">
            Sign in
          </button>
          <button className="border border-gray-200 px-3 py-1 rounded-full">
            Sign up
          </button>
        </div>
        <div className="lg:hidden bg-emerald-700 rounded-full">
          <Image
            width={40}
            height={40}
            alt="Profile image"
            src="/assets/icons/profile.png"
          />
        </div>
      </div>

      <div className="flex gap-10 items-center overflow-x-auto whitespace-nowrap no-scrollbar flex-nowrap mt-6">
        <Icons src="/assets/icons/living-room.png" name="Rooms" />
        <Icons src="/assets/icons/mansion.png" name="Mansion" />
        <Icons src="/assets/icons/farm.png" name="Countryside" />
        <Icons src="/assets/icons/villa.png" name="Villa" />
        <Icons src="/assets/icons/palm-tree.png" name="Tropical" />
        <Icons src="/assets/icons/key-chain.png" name="New" />
        <Icons src="/assets/icons/swimming-pool.png" name="Amazing pool" />
        <Icons src="/assets/icons/vacations.png" name="Beach house" />
        <Icons src="/assets/icons/island.png" name="Island" />
        <Icons src="/assets/icons/tent.png" name="Camping" />
        <Icons src="/assets/icons/home.png" name="House" />
        <Icons src="/assets/icons/cottage.png" name="Lakefront" />
        <Icons src="/assets/icons/barn.png" name="Farm house" />
        <Icons src="/assets/icons/treehouse.png" name="Treehouse" />
        <Icons src="/assets/icons/cabin.png" name="Cabins" />
        <Icons src="/assets/icons/castle-tower.png" name="Castle" />
      </div>
    </header>
  );
};

export default Header;
