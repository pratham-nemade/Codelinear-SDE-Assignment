import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import N7Border from "../../assets/N7-border.png";
import Vector2 from "../../assets/Vector2.png";
import Bg7 from "../../assets/7.png";
import { ArrowRight } from "lucide-react";
import { digitalBankingFeatures, marqueeItems } from "../../constants/constants";
import CTA from "./CTA";
import Button from "../ui/Button";

const GradientCheckIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        className="mt-0.5 shrink-0"
    >
        <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00B4FD" />
                <stop offset="100%" stopColor="#003ACE" />
            </linearGradient>
        </defs>

        <circle cx="12" cy="12" r="11" fill="url(#iconGradient)" />

        <path
            d="M16.8 8.8L10.7 14.9L7.8 12"
            fill="none"
            stroke="#E9F4F9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const DigitalBanking = () => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [AutoScroll({ speed: 1.5, stopOnInteraction: false })]
    );

    return (
        <div className="bg-[#EEF3F8]">

            <div className="overflow-hidden bg-white py-3.5" ref={emblaRef}>
                <div className="flex">
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                        <div key={i} className="flex shrink-0 items-center gap-4 px-5">
                            {!item.isEmoji && <span className="text-gray-300">✳</span>}
                            <span
                                className={`whitespace-nowrap font-archivo text-base font-medium ${item.isHighlight ? "text-[#0057FF]" : "text-[#0A1628]"
                                    }`}
                            >
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 overflow-hidden">

                <div className="absolute top-20 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
                    <img
                        src={N7Border}
                        alt="N7"
                        className="w-105 sm:w-130 lg:w-162.5 opacity-60"
                    />
                </div>

                <div className="absolute -bottom-107.5 right-0 z-0 pointer-events-none">
                    <img
                        src={Bg7}
                        alt="bg7"
                        className="w-75 sm:w-100 lg:w-125 opacity-40"
                    />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">

                    <div className="w-full lg:w-[38%] flex flex-col gap-5">
                        <div className="rounded-2xl p-6 relative overflow-visible">

                            <h1 className="font-archivo text-4xl sm:text-5xl font-light leading-tight text-[#000D12]">
                                Digital banking out-of-the-box
                            </h1>

                            <p className="text-[#4A5568] text-sm leading-relaxed mt-3">
                                N7 helps your financial institution improve the client experience, automate and optimize procedures
                            </p>
                            <Button variant="primary" className="mt-6">
                                Request Demo
                            </Button>

                            <a
                                href="#"
                                className="group font-chivo relative mt-4 block text-[12px] uppercase tracking-[0.14em] text-[#00B4FD]"
                            >
                                <span className="inline-flex items-center gap-2">
                                    Learn More
                                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </span>

                                <span className="absolute bottom-0 left-0 h-px w-[10%] bg-[#00B4FD]" />
                            </a>

                            <img
                                src={Vector2}
                                alt="vector"
                                className="absolute -left-20 top-62.5 w-[120%] opacity-90 pointer-events-none"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-[62%] flex flex-col divide-y divide-gray-200/60">
                        {digitalBankingFeatures.map((section, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-8 py-10 sm:flex-row ${section.imagePosition === "right"
                                    ? "sm:flex-row-reverse"
                                    : ""
                                    } items-center`}
                            >
                                <div className="w-full sm:w-[45%] flex justify-center">
                                    <img
                                        src={section.image}
                                        className="max-w-55 object-contain"
                                        alt=""
                                    />
                                </div>

                                <div className="w-full sm:w-[55%] flex flex-col gap-10">
                                    <h3 className="text-xl text-[#000D12]">
                                        {section.title}
                                    </h3>

                                    <p className="text-sm text-[#000D12]">
                                        {section.description}
                                    </p>

                                    <div className="flex flex-col gap-2">
                                        {section.points.map((p, i) => (
                                            <div key={i} className="flex gap-2">
                                                <span className="text-sm">
                                                    <GradientCheckIcon />
                                                </span>
                                                <span className="text-sm">{p}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CTA bgImage={N7Border} />
        </div>
    );
};

export default DigitalBanking;