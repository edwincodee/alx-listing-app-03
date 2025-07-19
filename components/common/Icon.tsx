import Image from "next/image";
const Icons: React.FC = () => {
  return (
    <div>
      <Image
        src="/assets/icons/vector.png"
        alt="Logo Image"
        width={40}
        height={30}
      />
    </div>
  );
};
export default Icons;
