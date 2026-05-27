import React from "react";
import { ArrowRight } from "lucide-react";

import Icon1 from "../assets/Solutions1.png";
import Icon2 from "../assets/Solutions2.png";
import Icon3 from "../assets/Solutions3.png";
import Icon4 from "../assets/Solutions4.png";
import Icon5 from "../assets/Solutions5.png";

const solutions = [
    {
        icon: Icon1,
        tag: null,
        title: "Core Banking CB7",
        description:
            "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    },
    {
        icon: Icon2,
        tag: null,
        title: "Digital Banking N7",
        description:
            "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    },
    {
        icon: Icon3,
        tag: null,
        title: "Open Banking",
        description:
            "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    },
    {
        icon: Icon4,
        tag: "NBFC",
        title: "Loan Origination System",
        description:
            "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    },
    {
        icon: Icon5,
        tag: "NBFC",
        title: "Loan Management System",
        description:
            "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    },
];

const LearnMoreLink = () => {
    return (
        <a
            href="#"
            className="group font-chivo relative mt-6 inline-flex items-center gap-2 pb-2 text-[12px] uppercase tracking-[0.14em] text-[#00B4FD] transition-all duration-300 hover:text-white"
        >
            Learn More

            <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
            />

            <span className="absolute bottom-0 left-0 h-px w-[10%] bg-[#00B4FD]" />
        </a>
    );
};

const SolutionCard = ({ icon, tag, title, description }) => {
    return (
        <div className="relative z-10 flex min-w-0 flex-col">
            <div className="mb-5 flex items-start justify-between gap-4">
                <img
                    src={icon}
                    alt={title}
                    className="h-10 w-10 shrink-0 object-contain opacity-80"
                />

                {tag && (
                    <span className="font-chivo shrink-0 text-[14px] font-medium uppercase tracking-[0.12em] text-[#E9F4F9]">
                        {tag}
                    </span>
                )}
            </div>

            <h3 className="font-archivo wrap-break-word text-[20px] leading-[1.2] tracking-[-0.02em] text-[#E9F4F9] sm:text-[22px]">
                {title}
            </h3>

            <p className="font-archivo mt-4 flex-1 wrap-break-word text-[15px] leading-7 text-[#E9F4F9] sm:text-[16px]">
                {description}
            </p>

            <LearnMoreLink />
        </div>
    );
};

const SolutionsSection = () => {
    const [left, right, middleLeft, middleRight, bottom] = solutions;

    return (
        <section className="w-full overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-20">
            <div className="mx-auto grid w-full max-w-360 grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                
                <div className="min-w-0 flex flex-col">
                    <h2 className="font-archivo max-w-105 wrap-break-word text-[30px] leading-[1.1] tracking-[-0.03em] text-[#E9F4F9] sm:text-[37px]">
                        All of our solutions are tailor-made to your needs
                    </h2>

                    <button className="font-chivo mt-8 w-fit cursor-pointer rounded-xl border border-[#E9F4F9] px-8 py-3 text-[14px] uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:mt-10">
                        Contact Us
                    </button>
                </div>

                <div className="relative min-w-0 flex flex-col gap-12 sm:gap-14">
                    <div
                        className="pointer-events-none absolute -right-30 top-[60%] h-70 w-70 -translate-y-1/2 rounded-full sm:h-85 sm:w-85 lg:h-95 lg:w-95"
                        style={{
                            background:
                                "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
                            filter: "blur(120px)",
                            opacity: 0.18,
                            zIndex: 0,
                        }}
                    />

                    <div className="grid min-w-0 grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
                        <SolutionCard {...left} />
                        <SolutionCard {...right} />
                    </div>

                    <div className="grid min-w-0 grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
                        <SolutionCard {...middleLeft} />
                        <SolutionCard {...middleRight} />
                    </div>

                    <div className="w-full sm:max-w-[50%]">
                        <SolutionCard {...bottom} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;