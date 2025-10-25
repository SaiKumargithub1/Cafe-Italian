import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HighlightsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-[50px] w-full">
      <div className="flex flex-col items-start gap-10 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="[font-family:'Inter',Helvetica] font-semibold text-[#fbead2] text-base tracking-[1.76px] leading-[12.8px] whitespace-nowrap">
            BOOKING
          </div>

          <h2 className="[font-family:'Montserrat',Helvetica] font-bold italic text-white text-[90px] tracking-[-1.80px] leading-[99.0px]">
            Private &amp; <br />
            Group Dining
          </h2>
        </div>

        <p className="max-w-[579px] [font-family:'Roboto',Helvetica] font-normal text-[#fbead2] text-lg tracking-[0.54px] leading-[27px]">
          At Bavette, we specialize in creating memorable dining experiences,
          whether you&#39;re seeking an intimate gathering or a grand
          celebration. Our private and group dining options are designed to meet
          your unique needs with personalized service, exceptional food, and a
          welcoming atmosphere.
        </p>
      </div>

      <Button className="h-auto flex items-center justify-center gap-[19px] px-10 py-[30px] bg-[#ccad64] hover:bg-[#ccad64]/90 border border-solid border-[#ccad64]">
        <span className="[font-family:'Inter',Helvetica] font-semibold text-[#282828] text-base tracking-[1.76px] leading-[12.8px] whitespace-nowrap">
          BOOK NOW
        </span>
        <ArrowRightIcon className="w-[17.48px] h-[13.58px]" strokeWidth={2} />
      </Button>
    </section>
  );
};
