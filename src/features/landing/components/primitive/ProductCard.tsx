import starIcon from "../../../../assets/landing/bgImages/staricon.svg";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  rating: string;
}

const ProductCard = ({ image, title, price, rating }: ProductCardProps) => {
  return (
    <article className="flex w-full min-w-0 flex-col items-center">
      <img
        src={image}
        alt={title}
        className="aspect-[430/566] w-full max-w-107.5 object-cover"
      />

      <h3 className="mt-8 text-center font-['Poppins'] text-[18px] font-semibold leading-none text-[#373737] sm:text-[20px] xl:text-[22px]">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap items-center justify-center">
        <span className="font-['Poppins'] text-[16px] font-medium leading-none text-[#454545] sm:text-[20px] xl:text-[22px]">
          {price}
        </span>

        <span className="ml-4 h-6.75 w-px bg-[#454545] sm:ml-6 xl:ml-9.75" />

        <div className="ml-4 flex items-center gap-1.25 sm:ml-6 xl:ml-12.25">
          <span className="font-['Poppins'] text-[16px] font-medium leading-none text-[#454545] sm:text-[20px] xl:text-[22px]">
            {rating}
          </span>

          <img src={starIcon} alt="Star" className="h-6 w-6 object-contain" />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
