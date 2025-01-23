import Link from "next/link";
import {
  BriefcaseBusiness,
  Facebook,
  Github,
  Linkedin,
  Map,
} from "lucide-react";

import { Typography } from "@/components/shared";

const CvContent = () => {
  return (
    <main className="w-full h-full flex flex-col bg-white px-8 py-9 gap-7">
      <section id="about-me" className="flex flex-col gap-4">
        <Typography variant="h2">Bui Xuan Tuong</Typography>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness />
            <Typography>Frontend Developer</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Map />
            <Typography>Hai Chai, Da Nang, Viet Nam</Typography>
          </div>
        </div>
        <div className="bg-[#D1ECF1] rounded-sm p-4 text-[#0C5460]">
          <Typography>
            Hi there, welcome to look at my profile! In 3+ years of JavaScript
            experience. I'm passionate about creating seamless user experiences
            and believe that simplifying code leads to more agile applications.
            I am good at teamwork, friendly, and easy to approach.
          </Typography>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Link
            href={""}
            className="p-2 rounded-full bg-blue-700 cursor-pointer hover:bg-[#fa983a]"
          >
            <Linkedin color="white" width={16} height={16} strokeWidth={3} />
          </Link>
          <Link
            href={""}
            className="p-2 rounded-full bg-black cursor-pointer hover:bg-[#fa983a]"
          >
            <Github color="white" width={16} height={16} strokeWidth={3} />
          </Link>
          <Link
            href={""}
            className="p-2 rounded-full bg-blue-600 cursor-pointer hover:bg-[#fa983a]"
          >
            <Facebook color="white" width={16} height={16} strokeWidth={3} />
          </Link>
        </div>
      </section>

      <section id="experience" className="flex flex-col gap-2">
        <Typography variant="h2">Experience</Typography>
        <div className="flex items-center justify-between font-bold">
          <Typography>Sun Asterisk- Frontend Developer</Typography>
          <Typography>07/2021- now</Typography>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Typography className="font-bold w-[150px]">Project:</Typography>
            <Typography className="flex-1">
              A system to scan, analyze, and manage security vulnerabilities in
              software projects (9 members)
            </Typography>
          </div>
          <ul>
            <li className="flex gap-2">
              <Typography className="font-semibold w-[150px]">
                Description:{" "}
              </Typography>
              <Typography className="flex-1">
                Automatically scans, analyzes, and alerts on security
                vulnerabilities in source code and dependencies of software
                projects. Performs security scans using user-provided URLs.
              </Typography>
            </li>
            <li className="flex gap-2">
              <Typography className="font-semibold w-[150px]">
                Technologies:{" "}
              </Typography>
              <Typography className="flex-1">NextJS + GraphQL</Typography>
            </li>
            <li className="flex gap-2">
              <Typography className="font-semibold w-[150px]">
                Responsibilities:{" "}
              </Typography>
              <Typography className="flex-1">
                Automatically scans, analyzes, and alerts on security
                vulnerabilities in source code and dependencies of software
                projects. Performs security scans using user-provided URLs.
              </Typography>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CvContent;
