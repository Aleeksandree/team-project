import type { FormEvent } from "react";

import RivoLogo from "../../../assets/landing/footer/Rivo.png";
import FacebookIcon from "../../../assets/landing/footer/Facebook.svg";
import InstagramIcon from "../../../assets/landing/footer/Instagram.svg";
import TwitterIcon from "../../../assets/landing/footer/Twitter.svg";

// Footer links
const shopLinks: string[] = ["Products", "Overview", "Pricing", "Releases"];

const companyLinks: string[] = ["About Us", "Contact", "News", "Support"];

// Reusable column component
interface FooterColumnProps {
  title: string;
  links: string[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="min-w-0 pt-0 xl:pt-[25px]">
      <h3 className="font-roboto-slab text-[18px] font-semibold leading-[27px] text-white">
        {title.toUpperCase()}
      </h3>

      <ul className="mt-[27px] flex list-none flex-col gap-[24px] p-0">
        {links.map((link) => (
          <li
            key={link}
            className="font-poppins text-[16px] font-normal leading-[24px] text-[#D8E9DE]"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Logo and Social Media section
function SocialMedia() {
  return (
    <div className="min-w-0">
      <div className="h-[61px] w-[117px]">
        <img
          src={RivoLogo}
          alt="Rivo"
          className="block h-auto w-[117px] object-contain"
        />
      </div>

      <div className="mt-[52px]">
        <h3 className="font-roboto-slab text-[18px] font-semibold leading-[27px] text-white">
          Social Media
        </h3>

        <div className="mt-[18px] flex items-center gap-[34px]">
          <img
            src={FacebookIcon}
            alt="Facebook"
            className="h-[38px] w-[38px] object-contain"
          />

          <img
            src={TwitterIcon}
            alt="Twitter"
            className="h-[35px] w-[35px] object-contain"
          />

          <img
            src={InstagramIcon}
            alt="Instagram"
            className="h-[38px] w-[38px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

// Newsletter section
function Newsletter() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-w-0 pt-0 xl:pt-[25px]">
      <h3 className="font-roboto-slab text-[18px] font-semibold leading-[27px] text-white">
        STAY UP TO DATE
      </h3>

      <form
        onSubmit={handleSubmit}
        className="mt-[32px] flex h-[56px] w-full max-w-[487px] overflow-hidden border border-[#A3F3BE] xl:mt-[48px]"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          aria-label="Enter your email"
          required
          className="h-full min-w-0 flex-1 bg-transparent px-[27px] font-poppins text-[16px] font-normal text-white outline-none placeholder:text-[#D8E9DE] focus:bg-white/5"
        />

        <button
          type="submit"
          className="h-full w-[114px] shrink-0 bg-[#A3F3BE] px-2 font-poppins text-[14px] font-medium text-[#224F34] transition-colors hover:bg-[#B9F8CE] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

// Bottom section: line and legal links
function FooterBottom() {
  return (
    <div className="mx-auto mt-12 flex w-[calc(100%-48px)] max-w-[1360px] flex-col gap-6 pb-8 sm:flex-row sm:items-center sm:gap-[34px] sm:pb-0 xl:absolute xl:bottom-[86px] xl:left-[10.65%] xl:mx-0 xl:mt-0 xl:w-[79.8%] xl:max-w-none">
      <div className="h-px w-full flex-1 bg-[#A3F3BE]" />

      <nav
        aria-label="Legal information"
        className="flex shrink-0 flex-wrap items-center gap-x-[34px] gap-y-3 font-poppins text-[16px] font-semibold leading-[30px] text-white"
      >
        <span className="flex h-[30px] w-[64px] items-center justify-center">
          Terms
        </span>

        <span className="flex h-[30px] w-[76px] items-center justify-center">
          Privacy
        </span>

        <span className="flex h-[30px] w-[82px] items-center justify-center">
          Cookies
        </span>
      </nav>
    </div>
  );
}

// Main Footer
function Footer() {
  return (
    <footer className="relative min-h-[599px] w-full overflow-hidden bg-[#224F34] text-white xl:h-[599px]">
      {/* Main content */}
      <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1360px] grid-cols-1 gap-y-12 pt-12 pb-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 xl:absolute xl:left-[10.65%] xl:top-[80px] xl:mx-0 xl:grid-cols-[398fr_237fr_257fr_487fr] xl:gap-x-0 xl:w-[79.8%] xl:max-w-none xl:p-0">
        <SocialMedia />

        <FooterColumn title="Shop" links={shopLinks} />

        <FooterColumn title="Company" links={companyLinks} />

        <Newsletter />
      </div>

      {/* Bottom content */}
      <FooterBottom />
    </footer>
  );
}

export default Footer;
