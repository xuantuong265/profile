import Image from "next/image";
import Link from "next/link";

import { CATEGORY_CV } from "@/constants/constant";
import { Typography } from "@/components/molecules";

const NavDesktop = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#38ADA9]">
      <div className="mb-6">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          className="object-cover rounded-full"
          width={180}
          height={180}
        />
      </div>

      <ul className="flex flex-col gap-4">
        {CATEGORY_CV.map(({ key, value }) => (
          <li key={key} className="cursor-pointer">
            <Link
              href={`/${key}`}
              className="text-[#FFFFFFB2] hover:text-white font-semibold text-capitalize"
            >
              <Typography>{value}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDesktop;
