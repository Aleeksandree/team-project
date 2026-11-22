import ourProductPic1 from "../../../../assets/landing/ourProducts/ourProductPic1.png";
import ourProductPic2 from "../../../../assets/landing/ourProducts/ourProductPic2.png";
import ourProductPic3 from "../../../../assets/landing/ourProducts/ourProductPic3.png";
import ourProductPic4 from "../../../../assets/landing/ourProducts/ourProductPic4.png";
import ourProductPic5 from "../../../../assets/landing/ourProducts/ourProductPic5.png";
import ourProductPic6 from "../../../../assets/landing/ourProducts/ourProductPic6.png";
import ourProductPic7 from "../../../../assets/landing/ourProducts/ourProductPic7.png";
import ourProductPic8 from "../../../../assets/landing/ourProducts/ourProductPic8.png";

import ProductCard from "../primitive/ProductCard";
import { useState } from "react";

const categories = ["SALE", "HOT", "NEW ARRIVALS", "ACCESSORIES"];

const products = [
  {
    id: 1,
    image: ourProductPic1,
    title: "Spread Collar Shirt",
    price: "$48.99",
    rating: "5.0",
    imageBgColor: "#F0F1F6",
  },
  {
    id: 2,
    image: ourProductPic2,
    title: "White Solid Formal Shirt",
    price: "$38.99",
    rating: "4.9",
    imageBgColor: "#EAEBF0",
  },
  {
    id: 3,
    image: ourProductPic3,
    title: "Shine On Me Blouse",
    price: "$42.99",
    rating: "4.8",
    imageBgColor: "#F0F0F1",
  },
  {
    id: 4,
    image: ourProductPic4,
    title: "Gray Solid Padded Jacket",
    price: "$32.99",
    rating: "4.7",
    imageBgColor: "#DDD6D0",
  },
  {
    id: 5,
    image: ourProductPic5,
    title: "Printed Loose T-shirt",
    price: "$39.99",
    rating: "5.0",
    imageBgColor: "#F0EFF5",
  },
  {
    id: 6,
    image: ourProductPic6,
    title: "Summer Wind Crop Shirt",
    price: "$39.95",
    rating: "4.7",
    imageBgColor: "#F2F3F8",
  },
  {
    id: 7,
    image: ourProductPic7,
    title: "Tailored Jacket",
    price: "$46.00",
    rating: "4.9",
    imageBgColor: "#F2F2F4",
  },
  {
    id: 8,
    image: ourProductPic8,
    title: "Solid Round Neck T-shirt",
    price: "$36.00",
    rating: "5.0",
    imageBgColor: "#DDECE2",
  },
];

const OurProducts = () => {
  const [activeCatgory, setActiveCategory] = useState("HOT");
  
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
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCatgory === category}
              className={`border-b-2 pb-2 font-['Poppins'] text-[14px] font-medium leading-none tracking-normal uppercase sm:text-[18px] lg:text-[22px] ${
                category === activeCatgory
                  ? "border-[#224F34] text-[#224F34]"
                  : "border-transparent text-[#454545]"
              }`}
            >
              {category}
            </button>
          ))}

          {/* Products grid */}
          <div className="mt-16 grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
                imageBgColor={product.imageBgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
