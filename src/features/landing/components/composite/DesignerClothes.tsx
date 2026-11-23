import accessoriesImage from "../../../../assets/landing/categories/woman1.png";
import dressesImage from "../../../../assets/landing/categories/woman2.png";
import outerwearImage from "../../../../assets/landing/categories/woman3.png";

const categories = [
    {
        title: "Accessories",
        image: accessoriesImage,
        description:
            "Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.",
    },
    {
        title: "Dresses",
        image: dressesImage,
        description:
            "Explore a stunning range of designer dresses, including evening gowns and chic day dresses.",
    },
    {
        title: "Outerwear",
        image: outerwearImage,
        description:
            "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.",
    },
];

const DesignerClothes = () => {
    return (
        <section className="w-full bg-white px-5 py-16 lg:py-24">
            <div className="mx-auto w-full max-w-360">
                <header className="mb-10 text-center sm:mb-12">
                    <h2 className="font-['Roboto_Slab'] text-[36px] font-medium leading-none text-[#224F34] sm:text-[48px] xl:text-[64px]">
                        Designer Clothes For You
                    </h2>
                    <p className="mt-4 font-['Poppins'] text-[16px] font-medium text-[#224F34] sm:text-[18px] xl:text-[22px]">
                        Immerse yourself in the world of luxury fashion with our
                        meticulously crafted designer clothes!
                    </p>
                </header>

                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-10.75">
                    {categories.map((category) => (
                        <article key={category.title} className="text-center">
                            <img
                                src={category.image}
                                alt={category.title}
                                className="aspect-[430/566] w-full max-w-107.5 bg-[#D6E5DB] object-cover"
                            />
                            <h3 className="mt-8 text-center font-['Poppins'] text-[18px] font-semibold leading-none text-[#373737] sm:text-[20px] xl:text-[22px]">
                                {category.title}
                            </h3>
                            <p className="mx-auto mt-3 max-w-sm font-['Poppins'] text-[14px] leading-relaxed text-[#454545] sm:text-[16px]">
                                {category.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignerClothes;
