import Link from "next/link";

const NavLinks = () => {
  const links = [
    { label: "DINE WITH US", link: "" },
    { label: "PLAND YOUR VISIT", link: "" },
    { label: "EVENTS", link: "" },
    { label: "VIEW GROVES MAP", link: "" },
    { label: "OUR STORY", link: "" },
    { label: "CONTACT US", link: "" },
  ];
  return (
    <div className="flex justify-center items-center bg-black w-full">
      <nav className="max-w-screen-lg flex justify-between items-center bg-black w-full p-5">
        {links.map((link, i) => (
          <Link href={link.link} key={i} className="text-sm text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavLinks;
