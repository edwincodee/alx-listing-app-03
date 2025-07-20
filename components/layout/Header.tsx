import Image from "next/image";
import Link from "next/link";
import Icons from "../common/Icon";
const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-emerald-600 flex items-center py-2 gap-x-2 justify-center text-gray-100 ">
        <div>
          <Image
            src="/assets/icons/minimalistic.png"
            alt="Case Minimalistic Image"
            width={20}
            height={15}
            priority
          />
        </div>
        <p className="">
          Overseas trip? Get the latest information on travel guides
        </p>
        <span className="rounded-full bg-black py-1 text-sm px-2 font-semibold">
          More info
        </span>
      </div>

      <div className=" flex items-center justify-around py-5 border-b border-gray-200">
        <>
          <Link href="/">
            <Image
              src="/assets/icons/vector.png"
              alt="Logo Image"
              width={40}
              height={30} 
            />
          </Link>
        </>

        <div></div>

        <div className="space-x-2">
          <button className="bg-emerald-600 rounded-full py-1 px-3 text-gray-50">
            Sign in
          </button>
          <button className="border border-gray-200 px-3 py-1 rounded-full">
            Sign up
          </button>
        </div>
      </div>

      <div className="flex gap-x-3 overflow-x-auto">
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
