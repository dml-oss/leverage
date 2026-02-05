"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, CirclePlay } from "lucide-react";


const slides = [
  {
    title: "Properties",
    description:
      "We develop and manage residential and commercial properties built for long term value and modern living.",
    cta: [
      { type: "primary", text: "View Properties", href: "#properties" },
      { type: "outline", text: "Learn More", href: "#properties" },
    ],
    image: "/images/hero/6.png",
  },
  {
    title: "Hospitality",
    description:
      "Hospitality spaces designed around comfort, experience, and thoughtful attention to detail.",
    cta: [
      { type: "primary", text: "Explore Hospitality", href: "#hospitality" },
      { type: "outline", text: "Our Approach", href: "#hospitality" },
    ],
    image: "/images/hero/5.png",
  },
  {
    title: "Interior Design",
    description:
      "Interior design that balances aesthetics and function to create timeless, livable spaces.",
    cta: [
      { type: "primary", text: "View Designs", href: "#interiors" },
      { type: "outline", text: "Design Process", href: "#interiors" },
    ],
    image: "/images/hero/4.png",
  },
  {
    title: "Real Estate, Interior Design and Hospitality",
    description:
      "An integrated service offering that brings real estate development, interior design, and hospitality together under one vision.",
    cta: [
      { type: "primary", text: "Explore Services", href: "#services" },
      { type: "outline", text: "Get in Touch", href: "#contact" },
    ],
    image: "/images/hero/3.png",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-yellow-100/20 to-muted from-background pl-10">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative py-24 flex flex-col md:flex-row items-start">
              {/* Hero Content */}
              <div
                className={`relative z-10 mx-auto md:mx-0 w-full md:w-1/2 px-6 transition-all duration-1000
                  ${activeIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
              >
                <h1 className="text-balance text-5xl font-medium md:text-6xl">
                  {slide.title}
                </h1>
                <p className="text-muted-foreground my-6 max-w-2xl text-xl pr-40">
                  {slide.description}
                </p>

                <div className="flex items-center gap-3">
                  {slide.cta.map((c, i) => {
                    if (c.type === "primary") {
                      return (
                        <Button
                          key={i}
                          asChild
                          size="lg"
                          className="pr-4.5 text-white rounded-full h-14"
                        >
                          <Link href={c.href}>
                            <span className="text-nowrap text-white">
                              {c.text}
                            </span>
                            <ChevronRight className="opacity-50" />
                          </Link>
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          key={i}
                          asChild
                          size="lg"
                          variant="outline"
                          className="pl-5 rounded-full h-14"
                        >
                          <Link href={c.href}>
                            <CirclePlay className="fill-primary/25 stroke-primary" />
                            <span className="text-nowrap">{c.text}</span>
                          </Link>
                        </Button>
                      );
                    }
                  })}
                </div>
              </div>

              {/* Background Image */}
              <div
                className={`absolute inset-0 z-0 transition-all duration-1000 bg-cover bg-center
                  ${activeIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ backgroundImage: `url(${slide.image})` }}
                aria-hidden="true"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
