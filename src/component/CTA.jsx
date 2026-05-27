import React from "react";

const CTA = () => {
    return (
        <section className="py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-360 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
                
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    
                    <div className="w-full max-w-2xl text-center lg:text-left">
                        <h2 className="font-archivo text-3xl font-light leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
                            Take the full advantage of going paper-less now.
                        </h2>

                        <p className="mt-4 font-archivo text-sm leading-relaxed text-[#9ca3af] sm:text-base md:text-lg">
                            CB7 helps your financial institution improve the
                            client experience, automate and optimize procedures,
                            simplify banking operations
                        </p>
                    </div>

                    <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center lg:justify-end">
                        
                        <button className="font-chivo cursor-pointer rounded-xl border border-[#E9F4F9] px-6 py-3 text-center text-[13px] uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:px-8 sm:text-[14px]">
                            Contact Us
                        </button>

                        <button className="font-chivo cursor-pointer rounded-xl bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] px-6 py-3 text-center text-[13px] uppercase tracking-[0.14em] text-white transition-all duration-300 hover:opacity-90 sm:px-8 sm:text-[14px]">
                            Request Demo
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTA;