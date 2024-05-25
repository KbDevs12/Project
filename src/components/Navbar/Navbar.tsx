"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState({
    profile: false,
    akademik: false,
    navOpen: false,
    ftik: false,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("project");
      if (projectSection) {
        if (window.scrollY > projectSection.offsetTop) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavMenu = () => {
    setMenuOpen({ ...menuOpen, navOpen: !menuOpen.navOpen });
  };

  return (
    <header
      className={` ${
        isScrolled ? " bg-indigo-950" : ""
      } fixed top-0 left-0 right-0 shadow-md py-4 md:py-0 px-4 flex items-center justify-between z-50 transition-colors duration-300`}
    >
      <Link href="">
        <span className="font-bold text-2xl text-gray-500 cursor-pointer">
          logo
        </span>
      </Link>

      {/* menu untuk hp */}
      <div className="md:hidden absolute right-4 z-50">
        <Hamburger toggled={menuOpen.navOpen} toggle={toggleNavMenu} />
      </div>

      {/* Menu navigasi untuk dekstop */}
      <nav className="hidden md:flex navbar">
        <ul className="list-none flex space-x-6">
          <li
            className="relative"
            onMouseEnter={() => setMenuOpen({ ...menuOpen, profile: true })}
            onMouseLeave={() => setMenuOpen({ ...menuOpen, profile: false })}
          >
            <Link href="">
              <span
                className={`text-lg py-5 px-4 block hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer ${
                  menuOpen.profile ? "text-blue-500" : "text-gray-500"
                }`}
              >
                Profile
              </span>
            </Link>
            {menuOpen.profile && (
              <ul className="absolute left-0 w-48 bg-white">
                <li
                  className="w-full border-t border-gray-200 hover:bg-gray-500 hover:text-white transition-all duration-300"
                  onMouseEnter={() => setMenuOpen({ ...menuOpen, ftik: true })}
                  onMouseLeave={() => setMenuOpen({ ...menuOpen, ftik: false })}
                >
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Faculty Of Information Engineering
                    </span>
                  </Link>
                  {menuOpen.ftik && (
                    <ul className="absolute -right-48 -top-0 w-48 bg-white text-black">
                      <li className="w-full border-t border-gray-200 hover:bg-gray-500 hover:text-white transition-all duration-300">
                        <Link href={""}>
                          <span className="block py-2 px-4 cursor-pointer">
                            Information Engineering
                          </span>
                        </Link>
                      </li>
                      <li className="w-full border-b border-gray-200 hover:bg-gray-500 hover:text-white transition-all duration-300">
                        <Link href={""}>
                          <span className="block py-2 px-4 cursor-pointer">
                            Information System
                          </span>
                        </Link>
                      </li>
                      <li className="w-full border-b border-gray-200 hover:bg-gray-500 hover:text-white transition-all duration-300">
                        <Link href={""}>
                          <span className="block py-2 px-4 cursor-pointer">
                            Film, Television & Media Studies
                          </span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="w-full border-t border-gray-200 hover:bg-gray-500 hover:text-white transition-all duration-300">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Fakultas FTIK
                    </span>
                  </Link>
                </li>
                <li className="w-full border-t border-gray-200 hover:bg-gray-500 hover:text-white transition-all duration-300">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Prodik SI
                    </span>
                  </Link>
                </li>
                <li className="w-full border-t border-gray-200 hover:bg-gray-500 hover:text-white transition-all duration-300">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Prodi Kajian Film, TV, dan Media
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="">
              <span className="text-lg py-5 px-4 text-gray-500 block hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer">
                Struktur Organisasi
              </span>
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setMenuOpen({ ...menuOpen, akademik: true })}
            onMouseLeave={() => setMenuOpen({ ...menuOpen, akademik: false })}
          >
            <Link href="">
              <span className="text-lg py-5 px-4 text-gray-500 block hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer">
                Akademik
              </span>
            </Link>
            {menuOpen.akademik && (
              <ul className="absolute left-0 w-48 bg-white">
                <li className="w-full border-t border-gray-200 hover:bg-gray-500 hover:text-white transition-all duration-300">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Kurikulum
                    </span>
                  </Link>
                </li>
                <li className="w-full border-t border-gray-200 hover:bg-gray-500 hover:text-white transition-all duration-300">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Panduan Akademik
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="">
              <span className="text-lg py-5 px-4 text-gray-500 block hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer">
                Prestasi
              </span>
            </Link>
          </li>
          <li>
            <Link href="">
              <span className="text-lg py-5 px-4 text-gray-500 block hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer">
                Gallery
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu dropdown untuk layar kecil */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-10 transition-transform duration-300 ${
          menuOpen.navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="list-none flex flex-col mt-20 space-y-4">
          <li
            className="relative"
            onClick={() =>
              setMenuOpen({ ...menuOpen, profile: !menuOpen.profile })
            }
          >
            <span className="text-lg py-2 px-4 text-gray-500 block hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer">
              Profile
            </span>
            {menuOpen.profile && (
              <ul className="ml-4">
                <li className="w-full border-t border-gray-200">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Fakultas FTIK
                    </span>
                  </Link>
                </li>
                <li className="w-full border-t border-gray-200">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Fakultas FTIK
                    </span>
                  </Link>
                </li>
                <li className="w-full border-t border-gray-200">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Prodik SI
                    </span>
                  </Link>
                </li>
                <li className="w-full border-t border-gray-200">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Prodi Kajian Film, TV, dan Media
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="">
              <span className="text-lg py-2 px-4 text-gray-500 block hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer">
                Struktur Organisasi
              </span>
            </Link>
          </li>
          <li
            className="relative"
            onClick={() =>
              setMenuOpen({ ...menuOpen, akademik: !menuOpen.akademik })
            }
          >
            <span className="text-lg py-2 px-4 text-gray-500 block hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer">
              Akademik
            </span>
            {menuOpen.akademik && (
              <ul className="ml-4">
                <li className="w-full border-t border-gray-200">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Kurikulum
                    </span>
                  </Link>
                </li>
                <li className="w-full border-t border-gray-200">
                  <Link href="">
                    <span className="block py-2 px-4 cursor-pointer">
                      Panduan Akademik
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="">
              <span className="text-lg py-2 px-4 text-gray-500 block hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer">
                Prestasi
              </span>
            </Link>
          </li>
          <li>
            <Link href="">
              <span className="text-lg py-2 px-4 text-gray-500 block hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer">
                Gallery
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
