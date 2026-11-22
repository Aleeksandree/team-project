
const categories = ["SALE", "HOT", "NEW ARRIVALS", "ACCESSORIES"];

const OurProducts = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center px-5 py-16 lg:py-24">
        {/* Section heading */}
        <h2 className="font-['Roboto_Slab'] text-[32px] font-medium leading-none tracking-normal text-[#224F34] sm:text-[40px] lg:text-[50px]">
          Our products
        </h2>

        {/* Product categories */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10 lg:mt-17.5 lg:gap-x-25">
          {categories.map((category) => (
            <span
              key={category}
              className={`border-b-2 pb-2 font-['Poppins'] text-[14px] font-medium leading-none tracking-normal uppercase sm:text-[18px] lg:text-[22px] ${
                category === "HOT"
                  ? "border-[#224F34] text-[#224F34]"
                  : "border-transparent text-[#454545]"
              }`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
