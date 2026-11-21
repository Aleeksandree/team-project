import { useState } from "react";
import bagIcon from "../../../assets/landing/bgImages/bagicon.svg";
import rollIcon from "../../../assets/landing/bgImages/roll.svg";
import headerlogo from "../../../../screens/header/headerlogo.svg";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SHOP", href: "/shop" },
  { name: "FEATURES", href: "/features" },
  { name: "CONTACT", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#C2EFD4]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-y-4 px-5 py-6 md:px-10 lg:flex-nowrap lg:px-[80px]">
        {/* Logo */}
        <img className=" h-12.25 w-23.5" src={headerlogo} alt="headerlogo" />

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-10">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-['Poppins'] text-[16px] font-medium text-[#224F34] transition-colors hover:text-[#397D54] xl:text-[18px]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-6">
          {/* Shopping bag */}
          <button
            type="button"
            aria-label="Shopping bag"
            className="relative h-7.5 w-7.5 cursor-pointer"
          >
            <img
              src={bagIcon}
              alt=""
              className="h-full w-full object-contain"
            />

            <img
              src={rollIcon}
              alt=""
              className="absolute bottom-0 right-0 h-2.5 w-2.5"
            />
          </button>

          {/* Login */}
          <button
            type="button"
            className="hidden h-[52px] w-[142px] cursor-pointer rounded-[3px] border-2 border-[#224F34] font-['Poppins'] text-[18px] font-medium text-[#224F34] transition-colors hover:bg-[#224F34] hover:text-white sm:block"
          >
            LOGIN
          </button>

          {/* Burger button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-[#224F34] lg:hidden"
          >
            {isMenuOpen ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile / Tablet navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="w-full border-t border-[#224F34]/20 pt-5 lg:hidden"
          >
            <ul className="flex flex-col items-center gap-6 pb-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-['Poppins'] text-[18px] font-medium text-[#224F34] transition-colors hover:text-[#397D54]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              {/* Login on small mobile */}
              <li className="sm:hidden">
                <button
                  type="button"
                  className="rounded-[3px] border-2 border-[#224F34] px-8 py-2 font-['Poppins'] font-medium text-[#224F34]"
                >
                  LOGIN
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
