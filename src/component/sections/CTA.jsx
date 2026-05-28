import React from "react";
import Button from "../ui/Button";

const CTA = ({ bgImage }) => {
    return (
        <section className="py-14 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-360 px-5 sm:px-6 lg:px-12 xl:px-16">
                <div
                    className="relative flex flex-col gap-8 overflow-hidden rounded-2xl p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-14"
                    style={{
                        background:
                            "linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)",
                    }}
                >
                    {!bgImage ? (
                        <div className="pointer-events-none absolute left-[16%] top-1/4 z-0 -translate-y-1/2 opacity-20">
                            <svg
                                viewBox="0 0 1200 500"
                                className="h-55 w-130 sm:h-80 sm:w-190 lg:h-130 lg:w-300"
                                fill="none"
                            >
                                <defs>
                                    <linearGradient
                                        id="strokeFade"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#4a5aff"
                                            stopOpacity="1"
                                        />
                                        <stop
                                            offset="70%"
                                            stopColor="#2a3aaa"
                                            stopOpacity="0.6"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#1a2070"
                                            stopOpacity="0.3"
                                        />
                                    </linearGradient>

                                    <linearGradient
                                        id="fillGrad"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#050810"
                                            stopOpacity="1"
                                        />
                                        <stop
                                            offset="70%"
                                            stopColor="#050810"
                                            stopOpacity="0.85"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#050810"
                                            stopOpacity="0.7"
                                        />
                                    </linearGradient>
                                </defs>

                                <text
                                    x="0"
                                    y="90%"
                                    fill="url(#fillGrad)"
                                    stroke="url(#strokeFade)"
                                    strokeWidth="3"
                                    textLength="980"
                                    lengthAdjust="spacing"
                                    className="font-archivo"
                                    style={{
                                        fontSize: "450px",
                                        fontWeight: 700,
                                        paintOrder: "stroke fill",
                                    }}
                                >
                                    CB7
                                </text>
                            </svg>
                        </div>
                    ) : (
                        <div className="pointer-events-none absolute -right-25 top-0 z-0 opacity-20">
                            <img
                                src={bgImage}
                                alt="cta-bg"
                                className="h-48 w-105 object-contain sm:h-64 sm:w-130 lg:h-80 lg:w-170"
                            />
                        </div>
                    )}

                    <div className="relative z-10 w-full text-center lg:max-w-[56%] lg:text-left">
                        <h2 className="font-archivo text-[1.5rem] leading-[1.2] tracking-[-0.02em] text-[#E9F4F9] sm:text-[2rem] md:text-[2.3rem] lg:text-[3rem]">
                            Take the full advantage of going paper-less now.
                        </h2>

                        <p className="mx-auto mt-4 max-w-105 font-sans text-[13px] leading-[1.7] text-white/50 sm:mt-5 sm:text-[14px] lg:mx-0">
                            CB7 helps your financial institution improve the
                            client experience, automate and optimize procedures,
                            simplify banking operations
                        </p>
                    </div>

                    <div className="relative z-10 flex w-full flex-col items-stretch gap-4 sm:flex-row lg:w-auto lg:flex-col lg:items-center xl:flex-row">
                        <Button variant="outline">
                            Contact Us
                        </Button>

                        <Button variant="primary">
                            Request Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;