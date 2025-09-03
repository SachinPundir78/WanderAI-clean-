"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { usePathname } from "next/navigation";


const menuOptions = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
  { name: "Destinations", path: "/#cards" },
  { name: "Contact Us", path: "/Contact-Us" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const {user}=useUser();
  const path = usePathname();
  console.log(path);


  return (
    <header className="relative top-0 z-30 w-full">
      {/* Main Header Container */}
      <div className="flex items-center justify-between px-2 sm:px-4 lg:px-2 py-2 lg:py-3 bg-transparent border-b border-black/20 shadow-md">
        {/* Logo + Title */}
        <div className="flex items-center sm:gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={55}
            className="sm:w-[100px] sm:h-[65px] lg:w-[120px] lg:h-[80px] xl:w-[110px] xl:h-[70px] object-cover filter contrast-125 brightness-110"
          />
          <h1 className="font-medium font-sans text-lg sm:text-2xl lg:text-3xl text-white drop-shadow-lg">
            WanderAI
          </h1>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-6 font-sans text-lg xl:text-lg font-medium">
          {menuOptions.map((menu, index) => (
            <Link
              key={index}
              href={menu.path}
              className="text-white hover:text-purple-700 hover:scale-105 transition-all duration-200 relative group drop-shadow-md"
            >
              <span className="relative">
                {menu.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Get Started Button - Hidden on tablet/mobile */}
        {/* Desktop Get Started Button - Hidden on tablet/mobile */}
        <div className="hidden lg:flex mr-14 items-center gap-4">
          {!user ? (
            <SignInButton mode="modal">
              <RainbowButton className="font-sans w-full bg-white font-semibold hover:bg-black hover:text-white">
                Get Started
              </RainbowButton>
            </SignInButton>
          ) : path === "/create-new-trip" ? (
            <Link href="/my-trips">
              <RainbowButton className="font-sans w-full bg-white font-semibold hover:bg-black hover:text-white">
                My Trips
              </RainbowButton>
            </Link>
          ) : (
            <Link href="/create-new-trip">
              <RainbowButton className="font-sans w-full bg-white font-semibold hover:bg-black hover:text-white">
                Create New Trip
              </RainbowButton>
            </Link>
          )}
          <UserButton
            appearance={{
              elements: {
                avatarBox:
                  "w-14 h-14 rounded-full border-2 border-black shadow-md",
              },
            }}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-white hover:text-purple-700 transition-colors drop-shadow-md"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/20 backdrop-blur-lg border-b border-white/20 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col py-2">
            {menuOptions.map((menu, index) => (
              <Link
                key={index}
                href={menu.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 text-white hover:text-purple-300 hover:bg-white/10 transition-all duration-200 font-sans text-lg font-medium drop-shadow-lg"
              >
                {menu.name}
              </Link>
            ))}
            {/* Mobile Get Started Button */}
            <div className="px-4 pt-2 pb-4 ml-2">
              {!user ? (
                <SignInButton mode="modal">
                  <RainbowButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-[70%] font-sans bg-white font-semibold hover:bg-black hover:text-white rounded-xl p-3"
                  >
                    Get Started
                  </RainbowButton>
                </SignInButton>
              ) : path === "/create-new-trip" ? (
                <Link
                  href="/my-trips"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <RainbowButton className="w-[70%] font-sans bg-white font-semibold hover:bg-black hover:text-white rounded-xl">
                    My Trips
                  </RainbowButton>
                </Link>
              ) : (
                <Link
                  href="/create-new-trip"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <RainbowButton className="w-[50%] font-sans bg-white font-semibold hover:bg-black hover:text-white rounded-xl p-3">
                    Create New Trip
                  </RainbowButton>
                </Link>
              )}
              <div className="mt-4">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-12 h-12 rounded-full border-2 border-purple-400 shadow-md",
                    },
                  }}
                />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;