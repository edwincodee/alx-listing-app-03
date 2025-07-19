import Image from "next/image";
const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-emerald-600 flex items-center justify-center py-10">
        <Image
          src="/assets/icons/minimalistic.png"
          alt="Case Minimalistic Image"
          width={20}
          height={20}
          priority
        />
        <p className="text-gray-100 text-xs">
          Overseas trip? Get the latest information on travel guides
        </p>
        <span>More info</span>
      </div>
    </header>
  );
};

export default Header;
