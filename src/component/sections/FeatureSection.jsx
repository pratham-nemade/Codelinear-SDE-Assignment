import React from "react";
import FeatureSectionImg from "../../assets/feature.png";
import { featureColumns } from "../../constants/constants";

const gradientBorder = {
    background: "linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)",
    padding: "1.05px",
};

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

const FeatureItem = ({ text }) => (
    <li className="flex items-start gap-2.5">
        <GradientCheckIcon />
        <span className="font-archivo text-[13.5px] leading-normal text-[#E9F4F9]">{text}</span>
    </li>
);

const FeatureSection = () => (
    <section className="relative overflow-hidden py-16">
        <div className="relative z-10 mx-auto flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

            <div className="relative flex w-full shrink-0 justify-start overflow-hidden lg:w-[48%]">
                <div className="relative w-[130%] max-w-none translate-x-[-23%]">
                    <div style={gradientBorder} className="rounded-tl-[10px] rounded-tr-[10px] rounded-bl-xs rounded-br-xs">
                        <div className="overflow-hidden rounded-tl-[9px] rounded-tr-[9px] rounded-bl-[1px] rounded-br-[1px] bg-[#050810] p-2">
                            <img
                                src={FeatureSectionImg}
                                alt="Core Banking Dashboard"
                                className="h-full w-full max-w-none rounded-tl-lg rounded-tr-lg rounded-bl-[1px] rounded-br-[1px] object-cover object-left"
                            />
                        </div>
                    </div>
                    <div style={gradientBorder} className="relative mx-auto mt-0 w-[135%] translate-x-[-13%] rounded-t-[5px] rounded-b-[14px]">
                        <div className="h-7 rounded-t-sm rounded-b-[13px] bg-[#050810]" />
                    </div>
                </div>
            </div>

            <div className="w-full px-6 sm:px-10 lg:flex-1 lg:px-0 lg:pr-16 xl:pr-24">
                <h2 className="font-archivo text-[1.7rem] leading-[1.15] tracking-[-0.02em] text-[#E9F4F9] sm:text-[2rem] lg:text-[2.1rem]">
                    Run a more efficient, flexible, and digitally connected corebanking system
                </h2>
                <p className="mt-5 font-archivo text-[16px] font-semibold text-[#E9F4F9]">
                    What you will get:
                </p>
                <div className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                    {featureColumns.map((column, index) => (
                        <ul key={index} className="flex flex-col gap-3">
                            {column.map((item) => (
                                <FeatureItem key={item} text={item} />
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

        </div>
    </section>
);

export default FeatureSection;