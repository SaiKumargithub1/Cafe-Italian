import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Anna Mathew",
    time: "one day ago",
    image: "/ellipse-8-2.svg",
    review:
      "Bavette delivers an unforgettable \nsteak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked \nprivate dining for our",
  },
  {
    name: "Gerrin Tom",
    time: "one day ago",
    image: "/ellipse-8-1.svg",
    review:
      "We booked private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth delicious, and the staff was amazing!",
  },
  {
    name: "Mery Elza",
    time: "one day ago",
    image: "/ellipse-8.svg",
    review:
      "Best steak I've ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
  },
];

export const FollowUsSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col py-16">
      <header className="inline-flex h-[124px] w-[754px] self-center flex-col items-center gap-3 mb-[76px]">
        <div className="w-fit [font-family:'Inter',Helvetica] font-semibold text-[#fbead2] text-base tracking-[1.76px] leading-[12.8px] whitespace-nowrap">
          REVIEWS
        </div>

        <h2 className="w-fit [font-family:'Montserrat',Helvetica] font-bold italic text-[#fff4e3] text-[90px] text-center tracking-[-1.80px] leading-[99.0px] whitespace-nowrap">
          Hear Our Guests
        </h2>
      </header>

      <div className="flex w-full max-w-[1359px] mx-auto items-center gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex-1 min-w-0 bg-neutral-950 border-0">
            <CardContent className="flex flex-col items-start gap-2.5 pt-10 pb-[39px] px-[30px]">
              <div className="flex flex-col w-full items-start gap-[60px]">
                <div className="inline-flex items-center gap-3.5">
                  <img
                    className="w-12 h-12 object-cover rounded-full"
                    alt={testimonial.name}
                    src={testimonial.image}
                  />

                  <div className="flex flex-col items-start gap-3">
                    <div className="[font-family:'Manrope',Helvetica] font-medium text-[#dedede] text-lg tracking-[0.54px] leading-[28.8px]">
                      {testimonial.name}
                    </div>

                    <div className="[font-family:'Manrope',Helvetica] font-normal text-[#9c9995] text-base tracking-[0.48px] leading-[25.6px]">
                      {testimonial.time}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3.5 w-full">
                  <img
                    className="flex-[0_0_auto]"
                    alt="5 star rating"
                    src="/frame-53.svg"
                  />

                  <p className="[font-family:'Roboto',Helvetica] font-light text-[#dedede] text-base tracking-[0.48px] leading-[25.6px] whitespace-pre-line">
                    {testimonial.review}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <img
        className="h-[59px] w-[134px] self-center mt-[59.5px]"
        alt="Carousel navigation"
        src="/frame-1171275238-1.svg"
      />
    </section>
  );
};
