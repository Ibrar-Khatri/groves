import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import NavLinks from "./Links";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center z-20 relative">
      <div className="max-w-screen-lg flex justify-between items-center w-full p-5">
        <Image src={"/logo-sm.png"} width={220} height={50} />
        <div className="flex justify-evenly items-center gap-5">
          <Link href={""}>
            <Image src={"/icons/tiktok.png"} width={21} height={21} />
          </Link>
          <Link href={""}>
            <Image src={"/icons/instagram.png"} width={21} height={21} />
          </Link>
          <Link href={""}>
            <Image src={"/icons/twitter.png"} width={21} height={21} />
          </Link>
          <Link href={""}>
            <Image src={"/icons/snapchat.png"} width={21} height={21} />
          </Link>
          <Button text="Login" />
          <div className="flex justify-center items-center gap-3">
            <Image src={"/icons/down-arrow.png"} width={21} height={21} />
            <Image src={"/icons/england.png"} width={33} height={22} />
            <p className="text-sm text-white">English</p>
          </div>
        </div>
      </div>
      <NavLinks />
    </div>
  );
};

export default Header;
