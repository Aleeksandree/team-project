import exclusiveOfferPic from "../../../../assets/landing/exclusiveOffer/exclusiveOfferPic.png";

const ExclusiveOffer = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-360 px-5 py-16 lg:py-24">
        <div className="flex w-full flex-col overflow-hidden bg-[#C2EFD4] lg:min-h-130 lg:flex-row xl:min-h-150">

            {/* Left - Woman image */}
            <div className="relative h-80 w-full lg:h-auto lg:w-1/2">
                {/* Decorative dots */}
                <div
                aria-hidden="true"
                className="absolute bottom-5 left-5 h-27.5 w-27.5"
                style={{
                    backgroundImage:
                    "radial-gradient(circle, #267D49 2px, transparent 2.5px)",
                    backgroundSize: "20px 20px",
                }}
                />

                <img
                src={exclusiveOfferPic}
                alt="Woman wearing a green blazer"
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-full -translate-x-1/2 object-contain object-bottom"
                />
            </div>

            {/* Right - Offer details */}
            <div className="flex w-full flex-col items-center justify-center px-6 py-12 text-center lg:w-1/2 lg:items-start lg:pr-12 lg:pl-4 lg:text-left">

                {/* Heading */}
                <h2 className="font-['Roboto_Slab'] text-[32px] font-medium leading-none text-[#224F34] sm:text-[40px] xl:text-[50px]">
                Exclusive offer
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-150 font-['Poppins'] text-[16px] font-medium leading-[1.7] text-[#224F34] sm:text-[18px] xl:text-[22px]">
                Unlock the ultimate style upgrade with our exclusive
                offer. Enjoy savings of up to 40% off on our latest
                New Arrivals.
                </p>

                {/* Countdown */}
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start xl:gap-6">
                {/* Days */}
                <div className="flex h-20 w-20 flex-col items-center justify-center bg-white sm:h-23.75 sm:w-23.75">
                    <span className="font-['Poppins'] text-[24px] font-semibold leading-none text-[#224F34] sm:text-[28px]">
                    06
                    </span>
                    <span className="mt-2 font-['Poppins'] text-[12px] font-medium text-[#224F34] sm:text-[14px]">
                    Days
                    </span>
                </div>

                {/* Hours */}
                <div className="flex h-20 w-20 flex-col items-center justify-center bg-white sm:h-23.75 sm:w-23.75">
                    <span className="font-['Poppins'] text-[24px] font-semibold leading-none text-[#224F34] sm:text-[28px]">
                    18
                    </span>
                    <span className="mt-2 font-['Poppins'] text-[12px] font-medium text-[#224F34] sm:text-[14px]">
                    Hours
                    </span>
                </div>

                {/* Minutes */}
                <div className="flex h-20 w-20 flex-col items-center justify-center bg-white sm:h-23.75 sm:w-23.75">
                    <span className="font-['Poppins'] text-[24px] font-semibold leading-none text-[#224F34] sm:text-[28px]">
                    48
                    </span>
                    <span className="mt-2 font-['Poppins'] text-[12px] font-medium text-[#224F34] sm:text-[14px]">
                    Min
                    </span>
                </div>
            </div>

            {/* Buy now button */}
            <button
              type="button"
              className="mt-10 flex h-15 w-50 cursor-pointer items-center justify-center rounded-[3px] bg-[#224F34] font-['Poppins'] text-[16px] font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-[#267D49] hover:shadow-lg active:scale-95 active:bg-[#193E2A] focus-visible:outline-offset-4 focus-visible:outline-[#224F34] sm:h-18.5 sm:w-57.5 sm:text-[18px]"
            >
              BUY NOW
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffer;
