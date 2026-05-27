import React from "react";
import heroImage from "../assets/hero.png";
import { ShieldCheck, Layers3, Globe, Sparkles, Waves, Hexagon } from "lucide-react";

const HeroSection = () => {
    const brands = [
        { name: "SHELLS", icon: ShieldCheck },
        { name: "SmartFinder", icon: Layers3 },
        { name: "Zoomerr", icon: Globe },
        { name: "ArtVenue", icon: Sparkles },
        { name: "kontrastr", icon: Hexagon },
        { name: "WAVESMARATHON", icon: Waves },
    ];

    return (
        <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
            <div className="relative mx-auto flex w-full max-w-360 flex-1 flex-col justify-center px-6 pt-28 lg:flex-row lg:items-center lg:px-16">
                <div className="w-full lg:w-1/2">
                    <h1 className="font-archivo text-[2.1rem] font-light leading-[1.02] tracking-[-0.03em] text-[#E9F4F9] sm:text-[2.6rem] md:text-[3rem] xl:text-[4rem] text-center lg:text-left">
                        The new foundation
                        <br />
                        of modern banking
                    </h1>

                    <p className="font-archivo mt-5 max-w-107.5 text-[15px] leading-6 text-[#E9F4F9] sm:text-[16px] text-center mx-auto lg:text-left lg:mx-0">
                        We drive innovation and growth, provide seamless customer experience and operational excellence
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <button className="font-chivo cursor-pointer rounded-xl bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] px-8 py-3 text-[14px] uppercase tracking-[0.14em] text-white sm:mt-10 sm:px-8 sm:text-[14px] ">
                            Request Demo
                        </button>

                        <button className="font-chivo cursor-pointer rounded-xl border border-[#E9F4F9] px-8 py-3 text-[14px] uppercase tracking-[0.14em] text-white sm:mt-10 sm:px-8 transition-all duration-300 hover:bg-white hover:text-black sm:text-[14px]">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="relative mt-12 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-75 blur-[60px]" />

                    <img
                        src={heroImage}
                        alt="Hero"
                        className="relative z-10 w-full max-w-155 object-contain"
                    />
                </div>
            </div>

            <div className="relative mx-auto w-full max-w-360 px-6 pb-8 pt-6 lg:px-16">
                <p className="font-archivo mb-5 text-[14px] font-semibold text-[#9CA3AF]">
                    Trusted By:
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 xl:gap-x-8">
                    {brands.map((brand) => {
                        const Icon = brand.icon;

                        return (
                            <div
                                key={brand.name}
                                className="flex items-center gap-2 text-[#7C8397] transition-colors duration-300 hover:text-white"
                            >
                                <Icon size={17} strokeWidth={1.8} />

                                <span className="font-roboto text-[13px] font-medium tracking-wide sm:text-[14px]">
                                    {brand.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;