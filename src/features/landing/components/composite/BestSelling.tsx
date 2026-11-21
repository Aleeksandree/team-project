import ProductCard from "../primitive/ProductCard";

import product1 from "../../../../assets/landing/bgImages/product1.png";
import product2 from "../../../../assets/landing/bgImages/product2.png";
import product3 from "../../../../assets/landing/bgImages/product3.png";

const products = [
  {
    id: 1,
    image: product1,
    title: "Regular Fit Long Sleeve Top",
    price: "$38.99",
    rating: "5.0",
  },
  {
    id: 2,
    image: product2,
    title: "Black Crop Tailored Jacket",
    price: "$62.99",
    rating: "4.9",
  },
  {
    id: 3,
    image: product3,
    title: "Textured Sunset Shirt",
    price: "$49.99",
    rating: "5.0",
  },
];

const BestSelling = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center px-5 py-16 lg:py-24">
        {/* Title and description */}
        <div className="flex w-full flex-col items-center gap-9.25 text-center">
          <h2 className="font-['Roboto_Slab'] text-[36px] font-medium leading-none tracking-normal text-[#224F34] sm:text-[48px] xl:text-[64px]">
            Best selling
          </h2>

          <p className="font-['Poppins'] text-[16px] font-medium leading-normal tracking-normal text-[#224F34] sm:text-[18px] xl:text-[22px] xl:leading-none">
            Get in on the trend with our curated selection of best-selling
            styles.
          </p>
        </div>

        {/* Products */}
        <div className="mt-16 grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-10.75">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>

        {/* See all button */}
        <button
          type="button"
          className="mt-16 flex min-h-16.25 w-full max-w-56 cursor-pointer items-center justify-center gap-2.5 rounded-[3px] border-2 border-[#224F34] px-13.75 py-4 text-[#224F34]"
        >
          <span className="whitespace-nowrap font-['Poppins'] text-[22px] font-medium leading-none tracking-normal">
            See all
          </span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
};

export default BestSelling;
