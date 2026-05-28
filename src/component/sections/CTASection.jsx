import React from "react";
import Button from "../ui/Button";

const CTASection = () => {
    return (
        <section className="py-14 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-360 px-5 sm:px-6 lg:px-12 xl:px-16">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    <div className="w-full max-w-2xl text-center lg:text-left">
                        <h2 className="font-archivo text-3xl font-light leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
                            Take the full advantage of going paper-less now.
                        </h2>

                        <p className="font-archivo mt-4 text-sm leading-relaxed text-[#9ca3af] sm:text-base md:text-lg">
                            CB7 helps your financial institution improve the
                            client experience, automate and optimize procedures,
                            simplify banking operations
                        </p>
                    </div>

                    <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center lg:justify-end">
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

export default CTASection;