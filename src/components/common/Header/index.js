import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import NavLinks from "./Links";
import SideBarMenu from "./SideBarMenu";
import SelectLanguage from "./SelectLanguage";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const links = [
    { label: "DINE WITH US", link: "" },
    { label: "PLAND YOUR VISIT", link: "" },
    { label: "EVENTS", link: "" },
    { label: "VIEW GROVES MAP", link: "" },
    { label: "OUR STORY", link: "" },
    { label: "CONTACT US", link: "" },
  ];

  return (
    <div className="flex flex-col justify-center items-center z-20 relative">
      <div className="max-w-screen-lg flex justify-between items-center w-full p-5 gap-3">
        <Image src={"/logo-sm.png"} width={220} height={50} />
        <div className="flex justify-evenly items-center gap-5 max-md:hidden">
          <SocialLinks />
          <Button text="Login" />
          <SelectLanguage />
        </div>
        <SideBarMenu links={links} />
      </div>
      <NavLinks links={links} />
    </div>
  );
};

export default Header;
