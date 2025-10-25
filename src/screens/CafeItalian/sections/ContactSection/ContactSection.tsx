import React from "react";
import { Button } from "../../../../components/ui/button";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[30px] relative">
      <h1 className="w-fit [font-family:'Montserrat',Helvetica] font-bold italic text-[#fff3e3] text-[130px] text-center tracking-[-2.60px] leading-[143px]">
        Welcome To
        <br />
        Cafe Italia
      </h1>

      <Button className="flex items-center justify-center gap-[19px] h-auto px-10 py-[30px] bg-[#ccad64] border border-solid hover:bg-[#ccad64]/90">
        <span className="[font-family:'Inter',Helvetica] font-semibold text-[#282828] text-base tracking-[1.76px] leading-[12.8px] whitespace-nowrap">
          VIEW MENU
        </span>
        <img
          className="w-[17.48px] h-[13.58px]"
          alt="Arrow"
          src="/group-2-1.png"
        />
      </Button>
    </section>
  );
};
