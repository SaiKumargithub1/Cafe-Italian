import React from "react";

const offerCards = [
  {
    title: "Food",
    description:
      "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our",
    backgroundImage: "url(..//frame-1171275061.png)",
    backgroundClass:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),url(..//frame-1171275061.png)_50%_50%_/_cover]",
  },
  {
    title: "Drinks",
    description:
      "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our",
    backgroundImage: "url(/image-5.png)",
    backgroundClass: "bg-[url(/image-5.png)] bg-[100%_100%]",
  },
  {
    title: "Atmosphere",
    description:
      "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our",
    backgroundImage: "url(..//frame-1171275063.png)",
    backgroundClass:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),url(..//frame-1171275063.png)_50%_50%_/_cover]",
  },
];

export const WelcomeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[120px] py-12">
      <header className="flex flex-col max-w-[825px] items-center gap-3">
        <p className="[font-family:'Inter',Helvetica] font-semibold text-[#fbead2] text-base tracking-[1.76px] leading-[12.8px] whitespace-nowrap">
          WE OFFER
        </p>

        <h2 className="w-full max-w-[933px] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-[90px] text-center tracking-[-1.80px] leading-[99.0px]">
          <span className="italic text-[#fff3e3] tracking-[-1.62px]">
            Unforgettable
            <br />
            Dining{" "}
          </span>
          <span className="italic text-[#ccad64] tracking-[-1.62px]">
            Experience
          </span>
        </h2>
      </header>

      <div className="flex flex-col items-start gap-[47px] w-full max-w-[1360px]">
        {offerCards.map((card, index) => (
          <article
            key={index}
            className={`flex flex-col min-h-[564px] items-start justify-end gap-2.5 px-[115px] py-[110px] w-full ${card.backgroundClass}`}
          >
            <div className="flex flex-col max-w-[499px] items-start gap-10">
              <h3 className="[font-family:'Montserrat',Helvetica] font-bold italic text-[#fff4e3] text-[90px] text-center tracking-[-1.80px] leading-[99.0px] whitespace-nowrap">
                {card.title}
              </h3>

              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#fbead2] text-lg tracking-[0.54px] leading-[27px]">
                {card.description.split("<br />").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < card.description.split("<br />").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
