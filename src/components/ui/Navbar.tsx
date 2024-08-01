"use client";
import React from "react";
import { useState } from "react";

import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    // Your additional toggle logic here, if needed
  };

  return (
    <Navbar
      maxWidth={"full"}
      shouldHideOnScroll={true}
      className="bg-transparent z-[100] absolute blur-none justify-between"
    >
      {/* for mobile screen */}

      <div>
        <NavbarContent className="sm:hidden  pr-3" justify="center">
          <NavbarBrand>
            <Image
              src="/assets/icon/defcon.png"
              alt="icon"
              height={125}
              width={125}
            />
          </NavbarBrand>
        </NavbarContent>
      </div>

      {/* for big screen  */}

      <NavbarContent className="hidden sm:flex  ">
        <NavbarBrand>
          <Image
            src="/assets/icon/defcon.png"
            alt="icon"
            height={125}
            width={125}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <div>
          <NavbarItem className="">
            <div className="gap-6 flex ">
              <div>
                <Link className="" href="/">
                  Home
                </Link>
              </div>
              <div>
                <Link className="" href="#about">
                  About
                </Link>
              </div>
              <div>
                <Link className="" href="#achievements">
                  Achievments
                </Link>
              </div>
              <div>
                <Link className="" href="#events">
                  Events
                </Link>
              </div>
            </div>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-red-600  font-bold py-2 px-2 rounded"
            href="https://docs.google.com/forms/d/e/1FAIpQLSemfe20wN5I7B3aZbUW5XzM3Gcm2tPPTBiEqT9G21NR92ak6A/viewform"
          >
            REGISTER NOW
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
