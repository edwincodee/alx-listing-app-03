import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`${
        isActive ? "border border-emerald-600 bg-emerald-100" : "shadow-xs"
      } rounded-full text-xs px-3 py-1 transition-all duration-100`}
    >
      {name}
    </button>
  );
};

export default Pill;
