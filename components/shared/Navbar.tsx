"use client";
import Link from "next/link";
import { useState } from "react";
import { MdAdsClick, MdClose } from "react-icons/md";
import Button from "../ui/Button";
import { FiMenu } from "react-icons/fi";
import { NAV_LINKS } from "./../../data/nav-links";
import ThemeToggle from "./ThemeToggle";
import Profile from "../ui/Profile";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <nav className="py-5 bg-transparent relative top-0 z-10 w-full dark:bg-secondary-background">
      <div className="max-w-[1450px] w-[90%] mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <div className="text-black font-semibold text-xl dark:text-white mr-4">
              <Profile />
            </div>

            {/* <MdAdsClick className="text-purple-600 text-3xl" /> */}
          </div>
        </Link>

        <ul
          className="flex gap-16 items-center max-md:hidden
        dark:text-white justify-center"
        >
          {NAV_LINKS.map((link, index) => (
            <Link href={link.route} key={index}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
        <div className="flex flex-1 justify-end mr-2">
          <ThemeToggle />
        </div>

        <div className="max-md:flex justify-center items-center gap-10">
          {/* <Link href={"/create"}>
            <Button>Post a Job</Button>
          </Link> */}

          <div
            className="md:hidden text-3xl cursor-pointer text-black"
            onClick={handleOpenMobileMenu}
          >
            {openMobileMenu ? <MdClose /> : <FiMenu />}
          </div>

          {openMobileMenu && (
            <ul className="md:hidden bg-purple-600 absolute top-14 right-5 px-4 py-6 text-center text-white rounded-md flex flex-col gap-3 shadow-md">
              {NAV_LINKS.map((link, index) => (
                <Link
                  href={link.route}
                  key={index}
                  onClick={() => setOpenMobileMenu(false)}
                >
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
