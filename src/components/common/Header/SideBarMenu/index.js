"use client";

import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../../Button";
import SelectLanguage from "../SelectLanguage";
import SocialLinks from "../SocialLinks";

const SideBarMenu = ({ links }) => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Image
        src={"/icons/hamburger.png"}
        width={30}
        height={30}
        className="cursor-pointer block md:hidden"
        onClick={() => setOpen(true)}
      />
      <Drawer title={null} closeIcon={null} onClose={onClose} open={open}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-5">
            <Image src={"/logo-sm.png"} width={160} height={50} />
            <Image
              src={"/icons/close-icon.png"}
              width={23}
              height={23}
              onClick={onClose}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            {links.map((link, i) => (
              <Link
                href={link.link}
                key={i}
                className={`text-xs text-white p-5 border-t last:border-b`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col p-5 gap-8">
            <SelectLanguage />
            <Button text="Login" className="rounded-2xl" />
          </div>
          <div className="mt-auto mb-10 p-5">
            <SocialLinks className="gap-7 !justify-start" />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SideBarMenu;
