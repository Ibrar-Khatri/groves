import Button from "@/components/common/Button";
import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";

const LocationSection = () => {
  return (
    <Wrapper className="text-white flex items-center sm:justify-center justify-start sm:flex-nowrap flex-wrap-reverse">
      <div className="flex-2">
        <Image src={"/places.png"} width={500} height={450} />
      </div>
      <div className="flex flex-col gap-8 flex-1 sm:max-w-80 min-w-72">
        <p className="text-xs">EXPERIENCE THE GROVES</p>
        <h1 className="text-4xl	">Find your place</h1>

        <p className="text-sm">
          Over interactive map will show the way to the shops and restaurants
          that you want to see
        </p>
        <Button text="Open the map" />
      </div>
    </Wrapper>
  );
};

export default LocationSection;
