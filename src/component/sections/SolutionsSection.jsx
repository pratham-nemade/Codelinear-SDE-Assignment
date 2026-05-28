import React from "react";
import { solutions } from "../../constants/constants";
import TextLink from "../ui/TextLink";
import Button from "../ui/Button";

const SolutionCard = ({ icon, tag, title, description }) => (
    <div className="flex min-w-0 flex-col">
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

        <h3 className="font-archivo text-[20px] leading-[1.2] tracking-[-0.02em] text-[#E9F4F9] sm:text-[22px]">
            {title}
        </h3>

        <p className="font-archivo mt-4 flex-1 text-[15px] leading-7 text-[#E9F4F9] sm:text-[16px]">
            {description}
        </p>

        <div className="mt-6">
            <TextLink>
                Learn More
            </TextLink>
        </div>
    </div>
);

const SolutionsSection = () => {
    const [left, right, middleLeft, middleRight, bottom] = solutions;

    return (
        <section className="w-full">
            <div className="mx-auto w-full max-w-360 px-5 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
                    <div className="flex w-full shrink-0 flex-col gap-5 lg:sticky lg:top-24 lg:w-[38%] lg:self-start">
                        <h2 className="font-archivo text-[30px] leading-[1.1] tracking-[-0.03em] text-[#E9F4F9] sm:text-[37px]">
                            All of our solutions are tailor-made to your needs
                        </h2>

                        <div className="w-fit">
                            <Button variant="outline">
                                Contact Us
                            </Button>
                        </div>
                    </div>

                    <div className="relative flex w-full flex-col gap-12 sm:gap-14 lg:w-[62%]">
                        <div
                            className="pointer-events-none absolute right-0 top-[60%] h-70 w-70 -translate-y-1/2 rounded-full sm:h-85 sm:w-85 lg:h-95 lg:w-95"
                            style={{
                                background:
                                    "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
                                filter: "blur(120px)",
                                opacity: 0.18,
                                zIndex: 0,
                            }}
                        />

                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
                            <SolutionCard {...left} />
                            <SolutionCard {...right} />
                        </div>

                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
                            <SolutionCard {...middleLeft} />
                            <SolutionCard {...middleRight} />
                        </div>

                        <div className="w-full sm:max-w-[50%]">
                            <SolutionCard {...bottom} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;