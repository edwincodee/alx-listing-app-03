import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`${
        isActive ? " border-emerald-800 border-2 bg-emerald-200" : "shadow-xs"
      } rounded-full border border-gray-200 text-xs px-4 py-2 transition-all duration-100`}
    >
      {name}
    </button>
  );
};

export default Pill;
