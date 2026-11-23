import mainWoman from "../../../../assets/landing/bgImages/mainwoman.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#C2EFD4]">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center justify-between gap-12 px-5 py-12 lg:flex-row lg:gap-10 lg:px-[10%] lg:py-20">
        {/* Left content */}
        <div className="flex w-full max-w-[649px] flex-col items-start">
          <h1 className="w-full font-['Rufina'] text-[42px] font-bold leading-none tracking-normal text-[#224F34] sm:text-[60px] xl:text-[86px]">
            Discover and Find Your Own Fashion!
          </h1>

          <p className="mt-8 max-w-[565px] font-['Poppins'] text-4 font-medium leading-[220%] tracking-normal text-[#267D49] sm:text-5 xl:text-6  ">
            Explore our curated collection of stylish clothing and accessories
            tailored to your unique taste.
          </p>

          <button
            type="button"
            className="mt-8 flex h-[74px] w-full max-w-[258px] cursor-pointer items-center justify-center rounded-[3px] bg-[#224F34] text-white shadow-[6px_33px_59px_0px_rgba(0,0,0,0.3)] hover:bg-[#377d53] "
          >
            EXPLORE NOW
          </button>
        </div>

        {/* Right image */}
        <div className="w-full max-w-[570px] shrink-0 lg:w-[42%]">
          <img
            src={mainWoman}
            alt="Fashion collection"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
