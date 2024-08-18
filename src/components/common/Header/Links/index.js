import Link from "next/link";

const NavLinks = ({ links }) => {
  return (
    <div className="flex justify-center items-center w-full border-y border-white top-10 max-md:hidden">
      <nav className="max-w-screen-lg flex justify-between items-center w-full px-5 py-3">
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
