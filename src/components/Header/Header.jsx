import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { navLink } from "@/data/data";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 px-5 lg:px-0 lg:py-3">
        <div className="">
          <img
            src="/primary-logo.png"
            alt="logo"
            className="w-[200px] object-contain"
          />
        </div>
        <div className=" ">
          <div className="hidden lg:block">
            <nav className="flex gap-12">
              {navLink.map((link, index) => (
                  <NavLink
                  to={link.href}
                  className="font-bold text-lg text-left gradient-text-menu"
                  activeClassName="gradient-text-menu-active"
                  exact
                  key={link.id}
                >
                  {link.link}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger className="text-white font-bold">
                <i className="fi fi-sr-bars-staggered text-3xl font-bold"></i>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <div className="mb-8">
                    <img
                      src="/primary-logo.png"
                      alt="logo"
                      className="w-[160px] object-contain"
                    />
                  </div>
                  <SheetDescription className="flex flex-col gap-8">
                    <nav className="flex flex-col gap-3">
                      {navLink.map((link, index) => (
                        <Link
                        to={link.href}
                        className="font-bold text-base text-left gradient-text inline-block py-2 rounded-md"
                      >
                        {link.link}
                      </Link>
                      ))}
                    </nav>
                    <div>
                      <Link
                        className="group w-full text-center inline-block rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-blue-500 p-[1px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                        to="#"
                      >
                        <span className="block rounded-full text-white bg-black px-8 py-3 text-md font-semibold group-hover:bg-transparent group-hover:transition group-hover:duration-700 group-hover:ease-in-out">
                          Contact Us
                        </span>
                      </Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="hidden lg:block">
          <Link
            className="group inline-block rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-blue-500 p-[1px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            to="#"
          >
            <span className="block rounded-full text-white bg-black px-8 py-3 text-md font-semibold group-hover:bg-transparent group-hover:transition group-hover:duration-700 group-hover:ease-in-out">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
