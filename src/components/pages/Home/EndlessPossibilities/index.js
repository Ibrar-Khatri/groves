import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";

const EndlessPossibilities = () => {
  return (
    <Wrapper className="flex flex-col gap-8 text-white max-w-4xl p-16	flex direct-col items-center">
      <div className="flex flex-col gap-3 max-w-3xl	">
        <h1 className="text-center text-4xl">Mall Of: Endless Possibilities</h1>
        <p className="text-center	text-xs mb-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          mollitia, maiores rem voluptates itaque corrupti corporis minus sed
          delectus consectetur officiis tempora facere quaerat eligendi voluptas
          magni non ipsa facilis.
        </p>
      </div>

      <Image src={"/grove-thumbnail.png"} width={904} height={502} />

      <div className="flex flex-col gap-3 bg-[#283111] p-7 rounded-2xl	">
        <p className="text-xs">25 SR/GUEST</p>
        <div className="flex justify-between">
          <h1 className="text-3xl">Get your General Access Ticket</h1>
          <span className="max-md:hidden">
            <Image src={"/icons/left-arrow.png"} width={37} height={23} />
          </span>
        </div>
        <p className="text-sm">
          lorme dolor sint pariatur esse duis. Exercitation amet veniam aliqua
          in consectetur in veniam veniam. Voluptate cillum labore adipisicing
          eiusmod. Veniam et nisi reprehenderit ea elit nostrud laboris nisi
        </p>
        <span className="block md:hidden flex justify-end	">
          <Image src={"/icons/left-arrow.png"} width={30} height={23} />
        </span>
      </div>
    </Wrapper>
  );
};

export default EndlessPossibilities;
