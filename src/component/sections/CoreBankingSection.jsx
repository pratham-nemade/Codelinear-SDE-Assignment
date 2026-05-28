import React from "react";
import { ArrowRight } from "lucide-react";
import CoreBankingSectionimg from "../../assets/coreBankingSection.png";
import Button from "../ui/Button";
import TextLink from "../ui/TextLink";

const gradientBorder = {
    background: "linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)",
    padding: "1.05px",
};

const CoreBankingSection = () => {
    return (
        <section className="relative overflow-hidden py-14">
            <div className="pointer-events-none absolute left-[-8%] top-1/2 z-0 -translate-y-1/2 opacity-20">
                <svg
                    viewBox="0 0 1200 500"
                    className="h-55 w-130 sm:h-80 sm:w-190 lg:h-130 lg:w-300"
                    fill="none"
                >
                    <defs>
                        <linearGradient id="strokeFade" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4a5aff" stopOpacity="1" />
                            <stop offset="70%" stopColor="#2a3aaa" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#1a2070" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#050810" stopOpacity="1" />
                            <stop offset="70%" stopColor="#050810" stopOpacity="0.85" />
                            <stop offset="100%" stopColor="#050810" stopOpacity="0.7" />
                        </linearGradient>
                    </defs>
                    <text
                        x="0"
                        y="90%"
                        fill="url(#fillGrad)"
                        stroke="url(#strokeFade)"
                        strokeWidth="3"
                        textLength="1080"
                        lengthAdjust="spacing"
                        className="font-archivo"
                        style={{
                            fontSize: "550px",
                            fontWeight: 700,
                            paintOrder: "stroke fill",
                        }}
                    >
                        CB7
                    </text>
                </svg>
            </div>

            <div className="relative z-10 mx-auto flex flex-col items-center gap-12 pl-6 sm:pl-10 lg:flex-row lg:justify-between lg:gap-20 lg:pl-16 xl:pl-20">
                <div className="w-full max-w-180 lg:w-[64%]">
                    <h2 className="font-archivo text-[2.6rem] font-normal leading-[1.05] tracking-[-0.04em] text-[#E9F4F9] sm:text-[3rem] lg:text-[4rem]">
                        A complete cloud-based core banking.
                    </h2>

                    <p className="font-archivo mt-5 max-w-[320px] text-[16px] leading-[1.3] text-[#E9F4F9]">
                        Faster time to market with our cloud-based core banking services
                    </p>

                    <div className="my-5">
                        <Button>
                            Request Demo
                        </Button>
                    </div>

                    <TextLink>
                        Learn More
                    </TextLink>
                </div>

                <div className="relative flex w-full flex-1 justify-end">
                    <div className="relative w-full max-w-[90vw] sm:max-w-125 lg:max-w-137.5">
                        <div
                            style={gradientBorder}
                            className="-mr-6 rounded-tl-[10px] rounded-bl-xs lg:-mr-16 xl:-mr-20"
                        >
                            <div className="overflow-hidden rounded-tl-[9px] rounded-bl-[1px] bg-[#050810] p-2">
                                <img
                                    src={CoreBankingSectionimg}
                                    alt="Core Banking Dashboard"
                                    className="h-full w-[110%] max-w-none object-cover object-left"
                                />
                            </div>
                        </div>

                        <div
                            style={gradientBorder}
                            className="relative mx-auto mt-0 w-[112%] translate-x-[-6%] rounded-t-[5px] rounded-b-[14px] sm:w-[120%] sm:translate-x-[-9%] lg:w-[135%] lg:translate-x-[-13%]"
                        >
                            <div className="h-5 rounded-t-sm rounded-b-[13px] bg-[#050810] sm:h-6 lg:h-7" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreBankingSection;