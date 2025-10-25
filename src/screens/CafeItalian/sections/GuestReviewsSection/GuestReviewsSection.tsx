import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const GuestReviewsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[140px] py-12">
      <header className="flex flex-col items-center gap-3 w-full">
        <Badge
          variant="outline"
          className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#fbead2] text-base tracking-[1.76px] leading-[12.8px] bg-transparent border-none"
        >
          OUR MENU
        </Badge>

        <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-transparent text-[90px] text-center leading-[90px] whitespace-nowrap">
          <span className="font-bold italic text-[#fff3e3] tracking-[-1.62px] leading-[99.0px]">
            Our{" "}
          </span>
          <span className="font-bold italic text-[#bc995d] tracking-[-1.62px] leading-[99.0px]">
            Specials
          </span>
        </h2>
      </header>

      <div className="relative w-full max-w-[1363px] h-[738px]">
        <div className="absolute top-[345px] left-[calc(50%_-_156px)] w-[309px] h-[110px] rounded-[154.5px/55px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] opacity-90" />

        <div className="absolute top-[254px] left-0 w-[325px] h-[325px] flex items-center justify-center opacity-20">
          <img
            className="h-[202px] -ml-px w-[304px] object-cover"
            alt="Side dish"
            src="/image-32.png"
          />
        </div>

        <div className="absolute top-0 left-[461px] w-[437px] h-[738px] rounded-[3000px_3000px_0px_0px] bg-[linear-gradient(180deg,rgba(22,22,22,0.73)_0%,rgba(0,0,0,0.73)_100%)]" />

        <div className="absolute top-[254px] left-[1038px] w-[325px] h-[325px] flex items-center justify-center opacity-20">
          <img
            className="mt-2.5 h-[157px] -ml-px w-[280px] object-cover"
            alt="Side dish"
            src="/image-33.png"
          />
        </div>

        <Card className="absolute top-[105px] left-[485px] w-[391px] h-[391px] bg-transparent border-none shadow-none">
          <CardContent className="flex items-center justify-center p-0 w-full h-full">
            <img
              className="mt-px h-[360px] -ml-px w-[360px] object-cover"
              alt="Classic Ribeye Steak"
              src="/6318-2.png"
            />
          </CardContent>
        </Card>

        <div className="absolute top-5 left-[797px] w-[126px] h-[126px]">
          <img className="w-full h-full" alt="Price badge" src="/vector.svg" />
        </div>

        <div className="absolute top-[62px] left-[819px] w-[84px] h-[42px] flex gap-px">
          <span className="w-[31px] h-[42px] [font-family:'Montserrat',Helvetica] font-semibold text-black text-[38px] text-center tracking-[0] leading-[41.8px] whitespace-nowrap">
            €
          </span>
          <span className="w-12 h-[42px] [font-family:'Montserrat',Helvetica] font-semibold text-black text-[38px] text-center tracking-[0] leading-[41.8px] whitespace-nowrap">
            30
          </span>
        </div>

        <div className="flex flex-col w-[217px] items-center gap-[29px] absolute top-[494px] left-[calc(50%_-_110px)]">
          <h3 className="self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-text-light text-[31px] text-center tracking-[-0.62px] leading-[34.1px]">
            Classic <br />
            Ribeye Steak
          </h3>
        </div>

        <img
          className="absolute top-[640px] left-[calc(50%_-_66px)] w-[134px] h-[59px]"
          alt="Decorative frame"
          src="/frame-1171275238.svg"
        />
      </div>
    </section>
  );
};
