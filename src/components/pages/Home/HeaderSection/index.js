import Button from "@/components/common/Button";
import Wrapper from "@/components/common/Wrapper";

const HeaderSection = () => {
  return (
    <div className="relative -mt-[136px] min-h-screen w-full z-0 bg-cover bg-no-repeat bg-[url('/jomboturn.png')]">
      <Wrapper className="h-full min-h-screen flex items-end">
        <div class="absolute z-0 inset-0 bg-black opacity-50 max-md:w-full w-1/2"></div>
        <div className="min-h-[calc(100vh-136px)] gap-7 h-full max-md:w-full w-1/2 flex flex-col justify-center text-white relative z-0">
          <p className="text-sm">KHWAJA YANNI</p>
          <h1 className="text-6xl	max-sm:text-4xl">
            The new <br />
            era of luxury
          </h1>
          <p className="text-sm">
            Lorem ipsum is simple dummy text of the printing and typesetting
            industury. Lorem ipsum.
          </p>
          <Button className="" text="Book reservation now" />
        </div>
      </Wrapper>
    </div>
  );
};

export default HeaderSection;
