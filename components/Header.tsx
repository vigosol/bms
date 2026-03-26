"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CtaButton from "./Ctabutton";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
const REGIONAL_LINKS = [
  { label: "Suchmaschinenoptimierung", href: "/" },
  { label: "Google Ads", href: "/" },
  { label: "UI/UX Webdesign", href: "/" },
  { label: "Social Media", href: "/" },
  { label: "Videoproduktion", href: "/" },
  { label: "TV-Werbung", href: "/" },
  { label: "Conversion Optimierung", href: "/" },
  { label: "Public Relations", href: "/" },
];
const Header = () => {
  const [regionalOpen, setRegionalOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full py-6">
      <div className="max-w-310  px-5 mx-auto w-full">
        <nav>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-23.75">
              <Link href="/">
                <img src="images/brand.svg" alt="" />
              </Link>
              <ol className="flex items-center m-auto gap-8">
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="text-base hover:text-orange-1100 ring-0 focus-visible:ring-0 font-normal cursor-pointer text-white-1100">
                        Leistungen
                        <span>
                          <img src="images/down-arw.svg" alt="" />
                        </span>
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="w-67.75 bg-black-1100 p-5 ring-0 text-base font-normal cursor-pointer text-white-1100"
                      align="start"
                    >
                      <DropdownMenuItem className="mb-6 p-0">
                        <Link href="/" className="hover:text-orange-1100">
                          Suchmaschinenoptimierung
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="mb-6 p-0">
                        <Link href="/" className="hover:text-orange-1100">
                          Google Ads
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="mb-6 p-0">
                        <Link href="/" className="hover:text-orange-1100">
                          UI/UX Webdesign
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="mb-6 p-0">
                        <Link href="/" className="hover:text-orange-1100">
                          Social Media
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="mb-6 p-0">
                        <Link href="/" className="hover:text-orange-1100">
                          Videoproduktion
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="mb-6 p-0">
                        <Link href="/" className="hover:text-orange-1100">
                          TV-Werbung
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="mb-6 p-0">
                        <Link href="/" className="hover:text-orange-1100">
                          Conversion Optimierung
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="p-0">
                        <Link href="/" className="hover:text-orange-1100">
                          Public Relations
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-base font-normal text-white-1100 hover:text-orange-1100"
                  >
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-base font-normal text-white-1100 hover:text-orange-1100"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-base font-normal text-white-1100 hover:text-orange-1100"
                  >
                    Branchen
                  </Link>
                </li>
              </ol>
            </div>
            <div className="flex items-center justify-center gap-8">
              <div>
                <CtaButton
                  href="/"
                  label="Kostenloses Kennenlernen"
                  variant="transparent"
                />
              </div>
              <div>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Link href="#">
                        <img src="images/hamburger.svg" alt="" />
                      </Link>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="w-100.75 bg-black-1100 p-5 ring-0 text-base font-normal cursor-pointer text-white-1100"
                      align="start"
                    >
                      <div className="mb-6">
                        <button
                          onClick={() => setRegionalOpen((prev) => !prev)}
                          className="flex items-center gap-1 text-base font-normal text-white-1100 leading-5.5 cursor-pointer bg-transparent border-0 p-0 w-full text-left"
                        >
                          <span>Regional</span>
                          <img
                            src="images/down-arw.svg"
                            alt=""
                            className={`transition-transform duration-200 ${
                              regionalOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </button>

                        {regionalOpen && (
                          <ul className="mt-4 flex flex-col gap-4 pl-8">
                            {REGIONAL_LINKS.map(({ label, href }) => (
                              <li key={label}>
                                <Link
                                  href={href}
                                  className="text-base font-normal text-white-1100 leading-5.5 whitespace-nowrap transition-opacity"
                                >
                                  {label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <DropdownMenuItem className="mb-6 p-0">
                        <Link href="/">Blog</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="mb-6 p-0">
                        <Link href="/">Branchen</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="p-0">
                        <Link href="/">Partnerprogramm</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
