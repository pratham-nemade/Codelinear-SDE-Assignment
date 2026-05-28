import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cases } from "../../constants/constants";
import Button from "../ui/Button";
import TextLink from "../ui/TextLink";

const CaseStudies = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        containScroll: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

        onSelect();

        emblaApi.on("select", onSelect);

        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );

    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );

    const scrollTo = useCallback(
        (i) => emblaApi && emblaApi.scrollTo(i),
        [emblaApi]
    );

    return (
        <section className="overflow-hidden py-7 sm:py-8 lg:py-10">
            <div className="mx-auto w-full max-w-360 px-5 sm:px-6 lg:px-12 xl:px-16">
                <h2 className="font-archivo mb-10 text-center text-3xl font-light tracking-[-0.02em] text-white sm:text-4xl md:mb-12 md:text-5xl">
                    Our Case Studies
                </h2>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {cases.map((card, index) => {
                            const CompanyIcon = card.CompanyIcon;

                            return (
                                <div
                                    key={index}
                                    className="min-w-0 flex-[0_0_100%] px-2 sm:px-3 md:flex-[0_0_82%]"
                                >
                                    <div className="flex flex-col rounded-2xl border border-white/5 bg-[#01141B] p-5 sm:flex-row sm:gap-20 sm:p-6">
                                        <div className="flex aspect-4/3 w-full shrink-0 items-center justify-center rounded-xl bg-[#07193C] p-6 sm:w-[45%]">
                                            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-20 sm:gap-y-10">
                                                {[...Array(4)].map((_, i) => (
                                                    <img
                                                        key={i}
                                                        src={card.pattern}
                                                        alt="pattern"
                                                        className="h-24 w-24 object-contain opacity-90 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-between gap-4 pt-5 sm:py-3 sm:pt-0">
                                            <div className="flex flex-col gap-3">
                                                <p className="font-chivo text-[10px] uppercase tracking-[0.22em] text-[#2490BB]">
                                                    {card.category}
                                                </p>

                                                <h3 className="font-archivo text-3xl font-light leading-snug tracking-[-0.02em] text-[#E9F4F9] sm:text-4xl lg:text-5xl">
                                                    {card.title}
                                                </h3>

                                                <div className="flex items-center gap-2.5 pt-1">
                                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                                                        <CompanyIcon
                                                            size={13}
                                                            className="text-[#586E84]"
                                                        />
                                                    </div>

                                                    <span className="font-archivo text-lg font-semibold text-[#586E84]">
                                                        {card.company}
                                                    </span>
                                                </div>
                                            </div>

                                            <Button variant="outline">
                                                Read More
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                    <div className="mx-auto flex flex-1 items-center justify-center gap-4 md:mx-0 md:ml-auto md:mr-0">
                        <button
                            onClick={scrollPrev}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-colors hover:bg-[#00B4FD]/10"
                        >
                            <ArrowLeft size={15} />
                        </button>

                        <div className="flex items-center gap-2">
                            {cases.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollTo(i)}
                                    className={`rounded-full transition-all duration-300 ${i === selectedIndex
                                            ? "h-1.5 w-6 bg-[#00B4FD]"
                                            : "h-1.5 w-1.5 border border-white/30"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={scrollNext}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-colors hover:bg-[#00B4FD]/10"
                        >
                            <ArrowRight size={15} />
                        </button>
                    </div>

                    <TextLink>
                        View All
                    </TextLink>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;