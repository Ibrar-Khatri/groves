import Image from "next/image";

const SelectLanguage = () => {
  return (
    <div className="flex items-center gap-3">
      <Image src={"/icons/down-arrow.png"} width={17} height={17} />
      <Image src={"/icons/england.png"} width={33} height={22} />
      <p className="text-sm text-white">English</p>
    </div>
  );
};
export default SelectLanguage;
