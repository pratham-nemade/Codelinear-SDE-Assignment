import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    ArrowLeft,
    ArrowRight,
    Zap,
    Globe,
    Shield,
    TrendingUp,
} from "lucide-react";

import Pattern from "../assets/vector.png";

const cases = [
    {
        category: "GETTING STARTED",
        title: "How we help brand reach out to more people",
        company: "Zoomerr",
        CompanyIcon: Zap,
        pattern: Pattern,
    },
    {
        category: "DIGITAL BANKING",
        title: "Transforming online payments for global reach",
        company: "FinVault",
        CompanyIcon: Globe,
        pattern: Pattern,
    },
    {
        category: "SECURITY",
        title: "How we secured millions of transactions daily",
        company: "TrustLayer",
        CompanyIcon: Shield,
        pattern: Pattern,
    },
    {
        category: "GROWTH",
        title: "Scaling a fintech startup from 0 to 1 million users",
        company: "GrowthPay",
        CompanyIcon: TrendingUp,
        pattern: Pattern,
    },
];

const CaseStudies = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        containScroll: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () =>
            setSelectedIndex(emblaApi.selectedScrollSnap());

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
        <section className="overflow-hidden pb-14 sm:pb-16 lg:pb-20">
            <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">

                <h2 className="font-archivo mb-10 px-2 text-center text-[2rem] font-light tracking-[-0.03em] text-white sm:text-[2.6rem] md:mb-14 md:text-[3.3rem]">
                    Our Case Studies
                </h2>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {cases.map((card, index) => {
                            const CompanyIcon = card.CompanyIcon;

                            return (
                                <div
                                    key={index}
                                    className="min-w-0 flex-[0_0_100%] px-2 sm:px-3 md:flex-[0_0_84%]"
                                >
                                    <div className="flex flex-col gap-5 rounded-[22px] border border-white/5 bg-[#01141B]/70 p-4 sm:p-5 md:flex-row md:gap-8 md:p-6">

                                        <div className="flex aspect-square items-center justify-center rounded-xl bg-[#07193C] p-5 md:w-1/2 md:aspect-auto">
                                            <div className="grid w-full max-w-85 grid-cols-2 gap-4">
                                                {[...Array(4)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex aspect-square items-center justify-center"
                                                    >
                                                        <img
                                                            src={card.pattern}
                                                            alt="pattern"
                                                            className="h-full w-full max-w-30 object-contain opacity-90"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-center gap-4 p-1 md:w-1/2 md:p-4">

                                            <p className="font-chivo text-[10px] uppercase tracking-[0.24em] text-[#2490BB]">
                                                {card.category}
                                            </p>

                                            <h3 className="font-archivo text-[1.7rem] font-light leading-[1.15] tracking-[-0.03em] text-[#E9F4F9] sm:text-[2rem] md:text-[2.5rem]">
                                                {card.title}
                                            </h3>

                                            <div className="flex items-center gap-3 pt-1">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                                                    <CompanyIcon
                                                        size={14}
                                                        className="text-white"
                                                    />
                                                </div>

                                                <span className="font-archivo text-[15px] text-white/65">
                                                    {card.company}
                                                </span>
                                            </div>

                                            <button className="font-chivo mt-3 w-full rounded-lg border border-white/15 px-7 py-3 text-[11px] uppercase tracking-[0.22em] text-white/75 transition-all duration-300 hover:bg-white/5 md:w-auto md:min-w-55">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-9 flex items-center justify-between gap-4">
                    <div className="mx-auto flex flex-1 items-center justify-center gap-4 md:mx-0 md:ml-auto md:mr-0">

                        <button
                            onClick={scrollPrev}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-colors hover:bg-[#00B4FD]/10"
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
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition-colors hover:bg-[#00B4FD]/10"
                        >
                            <ArrowRight size={15} />
                        </button>
                    </div>

                    <button className="group relative hidden items-center gap-2 pb-2 font-chivo text-[12px] uppercase tracking-[0.14em] text-[#00B4FD] transition-all duration-300 hover:text-white md:inline-flex">
                        View All

                        <ArrowRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />

                        <span className="absolute bottom-0 left-0 h-px w-[30%] bg-[#00B4FD]" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;