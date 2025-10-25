import React from "react";
import { Button } from "../../../../components/ui/button";

const menuCategories = [
  {
    image: "/image-6.png",
    title: "Italian dishes",
    imageClass: "",
  },
  {
    image: "/image-7.png",
    title: "Pastry",
    imageClass: "",
  },
  {
    image: "/image-8.png",
    title: "Coffee",
    imageClass: "object-cover",
  },
];

export const SpecialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 relative py-10">
      <div className="inline-flex flex-col items-center gap-20 relative flex-[0_0_auto]">
        <header className="flex flex-col w-full max-w-[462px] items-center gap-3 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#fbead2] text-base tracking-[1.76px] leading-[12.8px] whitespace-nowrap">
            EXPLORE MENU
          </div>

          <h2 className="relative w-fit [font-family:'Montserrat',Helvetica] font-bold italic text-[#fff3e3] text-[90px] text-center tracking-[-1.80px] leading-[99.0px] whitespace-nowrap">
            Our Menu
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full max-w-[1456px]">
          {menuCategories.map((category, index) => (
            <article
              key={index}
              className="relative w-full h-[598px] group cursor-pointer"
            >
              <img
                className={`absolute top-0 left-0 w-full h-[598px] ${category.imageClass}`}
                alt={category.title}
                src={category.image}
              />

              <div className="absolute top-[232px] left-[calc(50.00%_-_145px)] w-72 h-[444px] rotate-90 bg-[linear-gradient(90deg,rgba(7,7,7,0)_0%,rgba(2,2,2,0.66)_53%,rgba(0,0,0,1)_100%)]" />

              <h3 className="absolute top-[458px] left-1/2 -translate-x-1/2 [font-family:'Montserrat',Helvetica] font-bold text-[#fbead2] text-[32px] text-center tracking-[0] leading-[35.2px] whitespace-nowrap">
                {category.title}
              </h3>

              <div className="inline-flex flex-col items-start gap-2.5 pt-2.5 pb-1.5 px-0 absolute top-[508px] left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-center gap-2.5 pt-1.5 pb-2 px-0 relative w-full flex-[0_0_auto]">
                  <div className="w-fit mt-[-1.00px] text-[#d5a859] text-base tracking-[0.96px] leading-[12.8px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] font-semibold text-center">
                    VIEW MENU
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Button className="inline-flex items-center justify-center gap-[19px] px-10 py-[30px] bg-[#ccad64] border border-solid hover:bg-[#b89a56] h-auto">
        <span className="[font-family:'Inter',Helvetica] font-semibold text-[#282828] text-base tracking-[1.76px] leading-[12.8px] whitespace-nowrap">
          VIEW MENU
        </span>

        <img
          className="w-[17.48px] h-[13.58px]"
          alt="Arrow"
          src="/group-2-3.png"
        />
      </Button>
    </section>
  );
};
