import React from "react";
import { Button } from "../../components/ui/button";
import { ContactSection } from "./sections/ContactSection";
import { FollowUsSection } from "./sections/FollowUsSection";
import { GuestReviewsSection } from "./sections/GuestReviewsSection";
import { HighlightsSection } from "./sections/HighlightsSection";
import { MenuSection } from "./sections/MenuSection";
import { SpecialsSection } from "./sections/SpecialsSection";
import { WelcomeSection } from "./sections/WelcomeSection";

const topBarItems = [
  {
    icon: "/general---location-pin.svg",
    text: "2 Bury Old Road, Manchester, M8 9JN",
  },
  {
    icon: "/icon-outline-clock.svg",
    text: "Mon-Sat 11am - 11:30pm, Sun 12pm - 11pm",
  },
  {
    icon: "/communication---phone.svg",
    text: "0161 795 5502",
  },
  {
    icon: "/communication---email.svg",
    text: "reservations@istanbulrestaurantmanchester.co.uk",
  },
];

const navigationItems = [
  { label: "HOME" },
  { label: "MENU" },
  { label: "ABOUT" },
  { label: "CONTACT" },
];

const footerNavigationItems = [
  { label: "HOME" },
  { label: "MENU" },
  { label: "ABOUT" },
  { label: "CONTACT" },
];

const contactInfoCards = [
  {
    title: "BOOKING REQUEST",
    content: "0161 795 5502",
    contentClass: "text-[#ccad64] text-[26px]",
  },
  {
    title: "LOCATION",
    content: "2 Bury Old Road,\nManchester, M8 9JN",
    contentClass: "text-[#838383] text-xl w-[462px]",
  },
  {
    title: "OPENING HOURS",
    content: "Monday to Saturday\n11:00am - 11:30pm\nSunday 12:00pm - 11:00pm",
    contentClass: "text-[#838383] text-xl",
  },
];

export const CafeItalian = (): JSX.Element => {
  return (
    <div className="bg-black overflow-hidden w-full min-w-[1920px] relative">
      {/* Top Bar */}
      <header className="relative w-full h-[62px] bg-[#050505] z-50">
        <div className="flex items-center justify-between h-full px-[90px]">
          <div className="flex items-center gap-[175px]">
            {topBarItems.map((item, index) => (
              <div key={index} className="inline-flex items-center gap-1.5">
                <img className="w-6 h-6" alt="" src={item.icon} />
                <div className="[font-family:'Roboto',Helvetica] font-normal text-[#dddddd] text-base tracking-[0.48px] leading-6 whitespace-nowrap">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section with Background */}
      <section className="relative w-full">
        <img
          className="w-full h-[976px] object-cover"
          alt="Restaurant background"
          src="/rectangle-5.png"
        />

        <div className="absolute top-0 left-0 w-full h-[545px] bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0)_100%)]" />

        {/* Navigation */}
        <nav className="absolute top-[38px] left-1/2 -translate-x-1/2">
          <img
            className="w-[177px] h-[101px]"
            alt="Restaurant logo"
            src="/asset-3xxhdpi-1.png"
          />
        </nav>

        <nav className="absolute top-[38px] left-[125px] flex items-center gap-14">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto px-0 py-2.5 hover:bg-transparent"
            >
              <div className="[font-family:'Manrope',Helvetica] font-semibold text-white text-lg tracking-[1.08px] leading-[14.4px]">
                {item.label}
              </div>
            </Button>
          ))}
        </nav>

        <Button className="absolute top-[30px] right-[125px] h-auto bg-[#ccad64] border border-solid px-[30px] py-6 hover:bg-[#b89a54]">
          <div className="inline-flex items-center justify-center gap-[19px]">
            <div className="[font-family:'Inter',Helvetica] font-semibold text-[#282828] text-base tracking-[1.76px] leading-[12.8px] whitespace-nowrap">
              BOOK TABLE
            </div>
            <img
              className="w-[17.48px] h-[13.58px]"
              alt="Arrow"
              src="/group-2-2.png"
            />
          </div>
        </Button>
      </section>

      {/* Main Content */}
      <main className="relative w-full bg-black">
        <ContactSection />
        <SpecialsSection />
        <WelcomeSection />
        <GuestReviewsSection />
        <MenuSection />
        <HighlightsSection />

        {/* Highlights Image */}
        <section className="relative w-full flex justify-center py-20">
          <img
            className="w-[1836px] h-[772px] object-cover"
            alt="Restaurant interior"
            src="/image.png"
          />
        </section>

        <FollowUsSection />

        {/* Follow Us Header */}
        <section className="relative w-full py-20">
          <div className="flex flex-col items-start gap-[22px] px-[281px]">
            <div className="[font-family:'Oswald',Helvetica] font-bold text-[#fbead2] text-lg tracking-[1.98px] leading-[14.4px]">
              GALLEY
            </div>
            <div className="[font-family:'Montserrat',Helvetica] font-bold italic text-[#fff4e3] text-[90px] tracking-[-1.80px] leading-[99.0px]">
              follow us
            </div>
          </div>

          <Button className="absolute top-[29px] right-[309px] h-auto bg-neutral-950 border-[0.84px] border-solid border-transparent [border-image:linear-gradient(360deg,rgba(0,0,0,1)_0%,rgba(51,51,51,1)_100%)_1] px-[58px] py-[30px] hover:bg-neutral-900">
            <div className="inline-flex items-center gap-[19px]">
              <img
                className="w-[46px] h-[46px]"
                alt="Instagram"
                src="/instagram.svg"
              />
              <div className="[font-family:'Oswald',Helvetica] font-bold text-[#fbead2] text-lg tracking-[1.98px] leading-[14.4px] whitespace-nowrap">
                CHECK OUT OUR INSTAGRAM
              </div>
            </div>
          </Button>
        </section>

        {/* Instagram Gallery */}
        <section className="relative w-full px-[280px] pb-20">
          <img
            className="w-[1363px] h-[680px]"
            alt="Instagram gallery"
            src="/frame-1171277682.svg"
          />
        </section>

        {/* Contact Us Section */}
        <section className="relative w-full py-20">
          <div className="relative w-full h-[807px]">
            <div className="absolute inset-0 flex">
              <img
                className="w-[690px] h-[807px] object-cover"
                alt="Pattern"
                src="/pattern-4-3.png"
              />
              <img
                className="w-[690px] h-[807px] object-cover"
                alt="Pattern"
                src="/pattern-4-3.png"
              />
              <img
                className="w-[540px] h-[807px] object-cover"
                alt="Pattern"
                src="/pattern-4-3.png"
              />
            </div>

            <div className="absolute top-[156px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-[#fbead2] text-base tracking-[1.76px] leading-[12.8px]">
                CONNECT WITH US
              </div>
              <h2 className="[font-family:'Montserrat',Helvetica] font-bold italic text-[#fff4e3] text-[90px] tracking-[-1.80px] leading-[99.0px]">
                Contact Us
              </h2>
            </div>

            <div className="absolute top-[387px] left-[280px] flex gap-[24px]">
              {contactInfoCards.map((card, index) => (
                <div
                  key={index}
                  className="w-[437px] h-[206px] bg-[#ffffff05] border border-solid border-[#f8f8f817] backdrop-blur-[14.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.55px)_brightness(100%)] flex flex-col items-center justify-center gap-[13px] px-4"
                >
                  <div className="[font-family:'Inter',Helvetica] font-semibold text-[#fbead2] text-base tracking-[1.76px] leading-[12.8px] text-center">
                    {card.title}
                  </div>
                  <div
                    className={`[font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[${
                      card.title === "BOOKING REQUEST" ? "39px" : "30px"
                    }] text-center whitespace-pre-line ${card.contentClass}`}
                  >
                    {card.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative w-full bg-black pt-20 pb-10">
          <div className="flex flex-col items-center gap-[60px] mb-[85px]">
            <img
              className="w-[177px] h-[101px]"
              alt="Restaurant logo"
              src="/asset-3xxhdpi-1-1.png"
            />
          </div>

          <div className="flex justify-center mb-[43px]">
            <img
              className="w-[220px] h-[41px]"
              alt="Social media"
              src="/frame-1171277463.svg"
            />
          </div>

          <nav className="flex items-center justify-center gap-[86px] mb-[61px]">
            {footerNavigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto px-0 py-2.5 hover:bg-transparent"
              >
                <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#ababab] text-base tracking-[0.96px] leading-[12.8px]">
                  {item.label}
                </div>
              </Button>
            ))}
          </nav>

          <div className="w-full h-px bg-[#333333] mb-[39px]">
            <img
              className="w-full h-px object-cover"
              alt="Line"
              src="/line-1.svg"
            />
          </div>

          <div className="flex justify-center">
            <div className="[font-family:'Manrope',Helvetica] font-normal text-sm tracking-[0.84px] leading-[11.2px]">
              <span className="text-[#63605c] tracking-[0.12px]">
                © 2024 Istanbul Restaurant Manchester. All Rights Reserved |{" "}
              </span>
              <a
                href="https://foodo.ai/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#ccad64] tracking-[0.12px] underline hover:text-[#b89a54]"
              >
                Powered By Foodo
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Menu Button */}
      <Button className="fixed top-[810px] right-[208px] w-[130px] h-[130px] bg-[#080808] rounded-[65px] hover:bg-[#1a1a1a] p-0">
        <div className="flex flex-col items-center gap-[11px]">
          <img className="w-8 h-8" alt="Menu icon" src="/frame.svg" />
          <div className="[font-family:'Manrope',Helvetica] font-semibold text-[#8f8f8f] text-sm tracking-[0.84px] leading-[16.8px] text-center">
            VIEW
            <br />
            MENU
          </div>
        </div>
      </Button>
    </div>
  );
};
