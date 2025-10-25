import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const menuItems = [
  {
    name: "Adana Kebab",
    price: "€ 120",
    image: "/frame-1171275061.png",
    imageClass: "object-cover",
  },
  {
    name: "Meze Platter",
    price: "€ 120",
    image: "/image-2.png",
    imageClass: "",
  },
  {
    name: "Baklava",
    price: "€ 120",
    image: "/image-3.png",
    imageClass: "",
  },
  {
    name: "Kebab Platter",
    price: "€ 120",
    image: "/image-4.png",
    imageClass: "object-cover",
  },
];

export const MenuSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[94px] px-4 py-8">
      <header className="flex flex-col items-center gap-3 w-full">
        <p className="[font-family:'Inter',Helvetica] font-semibold text-[#fbead2] text-base tracking-[1.76px] leading-[12.8px] whitespace-nowrap">
          OUR TOP PICKS THIS MONTH
        </p>

        <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-transparent text-[90px] text-center leading-[90px] whitespace-nowrap">
          <span className="font-bold italic text-[#fff4e3] tracking-[0] leading-[0.1px]">
            Monthly{" "}
          </span>
          <span className="font-bold italic text-[#bc995d] tracking-[-1.62px] leading-[99.0px]">
            Highlights
          </span>
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full max-w-[1740px]">
        {menuItems.map((item, index) => (
          <Card
            key={index}
            className="flex flex-col items-center gap-[31.33px] bg-transparent border-0 shadow-none"
          >
            <CardContent className="p-0 flex flex-col items-center gap-[31.33px] w-full">
              <img
                className={`w-full h-auto aspect-[387/492] ${item.imageClass}`}
                alt={item.name}
                src={item.image}
              />
              <div className="flex flex-col items-center gap-[14.46px]">
                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-text-light text-3xl text-center tracking-[-0.60px] leading-[33px] whitespace-nowrap">
                  {item.name}
                </h3>
                <p className="[font-family:'Inter_18pt-Regular',Helvetica] font-normal text-[#c99e5f] text-lg text-center tracking-[2.16px] leading-[14.4px]">
                  {item.price}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
