import React from "react";
import PatternImage from "../../assets/Vector.png";
import { insights } from "../../constants/constants";
import Button from "../ui/Button";
import TextLink from "../ui/TextLink";

const Insights = () => {
    return (
        <section className="flex min-h-screen items-center py-16">
            <div className="mx-auto flex w-full max-w-360 flex-col gap-10 px-5 sm:px-6 lg:flex-row lg:gap-14 lg:px-12 xl:px-16">
                <div className="relative flex shrink-0 flex-col justify-start gap-8 lg:w-[30%]">
                    <div
                        className="pointer-events-none absolute -left-20 top-36 h-75 w-125 rounded-full opacity-10 blur-3xl"
                        style={{
                            background:
                                "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
                        }}
                    />

                    <h2 className="relative z-10 font-archivo text-2xl font-light leading-snug text-[#E9F4F9] sm:text-3xl xl:text-4xl">
                        Get yourself up-to-speed on all the things happening in fintech
                    </h2>

                    <div className="relative z-10">
                        <Button variant="outline">
                            Insights
                        </Button>
                    </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-4">
                    <div className="flex flex-col overflow-hidden rounded-2xl bg-[#01141B] p-4 sm:flex-row">
                        <div className="flex aspect-4/3 w-full items-center justify-center rounded-xl bg-[#07193C] sm:w-1/2">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8 lg:gap-x-20 lg:gap-y-10">
                                {[...Array(4)].map((_, i) => (
                                    <img
                                        key={i}
                                        src={PatternImage}
                                        alt="pattern"
                                        className="h-12 w-12 object-contain sm:h-16 sm:w-16 lg:h-28 lg:w-28"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex w-full flex-col justify-between gap-4 p-5 sm:w-1/2 sm:gap-0 sm:p-6">
                            <div className="flex flex-col gap-3">
                                <p className="font-chivo text-xs uppercase tracking-[0.2em] text-[#2490BB]">
                                    {insights[0].category}
                                </p>

                                <h3 className="text-xl font-light leading-snug text-[#E9F4F9] sm:text-2xl lg:text-3xl">
                                    {insights[0].title}
                                </h3>

                                <div className="font-archivo flex items-center gap-4 text-sm text-[#64A8C4]">
                                    <span>{insights[0].author}</span>
                                    <span>{insights[0].date}</span>
                                </div>
                            </div>

                            <Button variant="outline">
                                Read More
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {insights.slice(1).map((item, index) => (
                            <div
                                key={index}
                                className="flex aspect-4/3 flex-col justify-between rounded-2xl bg-[#01141B] p-5 sm:p-6"
                            >
                                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                                    <p className="font-chivo text-xs uppercase tracking-[0.2em] text-[#2490BB]">
                                        {item.category}
                                    </p>

                                    <h3 className="text-lg font-light leading-snug text-[#E9F4F9] sm:text-xl lg:text-2xl xl:text-3xl">
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center gap-3 text-sm text-[#64A8C4]">
                                        <span>{item.author}</span>
                                        <span>{item.date}</span>
                                    </div>
                                </div>

                                <Button variant="outline">
                                    Read More
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end">
                        <TextLink>
                            Read All Insights
                        </TextLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Insights;