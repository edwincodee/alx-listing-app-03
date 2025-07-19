import Image from "next/image";
const Icons: React.FC<{ src: string; name: string }> = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center justify-between w-screen whitespace-nowrap overflow-x-hidden my-4">
      <Image src={src} alt={`${name} Image`} width={30} height={30} />
      <p className="text-gray-600 text-xs">{name}</p>
    </div>
  );
};
export default Icons;
