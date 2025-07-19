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
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons />
      </div>
    </header>
  );
};

export default Header;
