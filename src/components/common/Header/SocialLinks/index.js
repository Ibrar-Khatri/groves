import Link from "next/link";
import Image from "next/image";

const SocialLinks = ({ className }) => {
  return (
    <div className={`flex justify-evenly items-center gap-5 ${className}`}>
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
    </div>
  );
};

export default SocialLinks;
