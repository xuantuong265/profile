import Link from "next/link";

import { CATEGORY_CV } from "@/constants";
import { Typography } from "@/components/shared";

const NavDesktop = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#38ADA9]">
      <div className="mb-6 rounded-full border-8 border-[#88CECB]">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          className="rounded-full object-cover"
          width={160}
          height={160}
        />
      </div>

      <ul className="flex flex-col gap-4">
        {CATEGORY_CV.map(({ key, value }) => (
          <li key={key} className="cursor-pointer">
            <Link
              href={`/cv#${key}`}
              className="text-capitalize font-semibold text-[#FFFFFFB2] hover:text-white"
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
