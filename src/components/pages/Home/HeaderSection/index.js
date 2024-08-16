import Button from "@/components/common/Button";
import Wrapper from "@/components/common/Wrapper";

const HeaderSection = () => {
  return <div className="top-0 min-h-screen absolute w-full z-0 bg-contain bg-[url('/jomboturn.png')]">
      <Wrapper className="mt-[136px] h-full">
        <div class="absolute z-0 inset-0 bg-black opacity-50 w-1/2"></div>
        <div className="min-h-[calc(100vh-136px)] gap-7 h-full w-1/2 flex flex-col justify-center text-white relative z-0">
          <p className="text-sm">KHWAJA YANNI</p>
          <h1 className="text-6xl	">
            The new <br />
            era of luxury
          </h1>
          <p className="text-sm">
            Lorem ipsum is simple dummy text of the printing and typesetting
            industury. Lorem ipsum.
          </p>
          <Button className="" text="Book reservation now"  />
        </div>
      </Wrapper>
    </div>;
};

export default HeaderSection;
