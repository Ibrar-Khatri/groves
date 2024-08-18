import Image from "next/image";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-[#283111] p-3 rounded-[38px] max-w-[450px]">
      <Image src={`/static/${experience.image}`} width={508} height={304} />
      <div className="flex px-2 py-7 items-center">
        <div className="w-full flex flex-col gap-3">
          <h1 className="text-3xl">{experience.label}</h1>
          <p className="text-md text-center bg-gradient-to-r from-[#AD8749] to-[#AD8749] max-w-48 w-full p-0.5 rounded-full">
            100 SR PER GUSET
          </p>
        </div>
        <Image src={"/icons/left-arrow.png"} width={30} height={7} />
      </div>
    </div>
  );
};

export default ExperienceCard;
