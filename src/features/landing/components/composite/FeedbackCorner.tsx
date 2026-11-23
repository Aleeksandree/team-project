import leftArrow from "../../../../../assets/landing/feedback/arrow-right.png";
import rightArrow from "../../../../../assets/landing/feedback/arrow-left.png";
import quoteIcon from "../../../../../assets/landing/feedback/quote-icon.png";

const testimonials = [
  {
    name: "Emily Wilson",
    quote:
      "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!",
  },
  {
    name: "Sarah Thompson",
    quote:
      "I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!",
    featured: true,
  },
  {
    name: "Olivia Martinez",
    quote:
      "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
  },
];

const FeedbackCorner = () => {
  return (
    <section className="w-full bg-white px-5 pb-20 pt-8 sm:pb-24">
      <div className="mx-auto w-full max-w-360">
        <h2 className="mb-10 text-center font-['Roboto_Slab'] text-[36px] font-medium leading-none text-[#224F34] sm:mb-12 sm:text-[48px] xl:text-[64px]">
          Feedback Corner
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={`p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] ${
                testimonial.featured ? "bg-[#C2EFD4]" : "bg-white"
              }`}
            >
              <img src={quoteIcon} alt="" className="h-4 w-4 object-contain" />
              <h3 className="mt-3 font-['Roboto_Slab'] text-base font-semibold text-[#224F34]">
                {testimonial.name}
              </h3>
              <p className="mt-4 font-['Poppins'] text-xs leading-relaxed text-[#454545]">
                {testimonial.quote}
              </p>
            </article>
          ))}
        </div>

        {/* Carousel controls can be wired up if the assignment requires sliding testimonials. */}
        <div className="mt-10 flex justify-center gap-4" aria-label="Testimonial controls">
          <button
            type="button"
            aria-label="Previous testimonials"
            className="flex h-9 w-9 items-center justify-center bg-white text-lg text-[#224F34] shadow-sm"
          >
            <img src={leftArrow} alt="" className="h-3 w-3" />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            className="flex h-9 w-9 items-center justify-center bg-[#C2EFD4] text-lg text-[#224F34]"
          >
            <img src={rightArrow} alt="" className="h-3 w-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCorner;
