import React from "react";
import { ArrowRight } from "lucide-react";
import FooterLogo from "../assets/N7.png";

const offices = [
    {
        city: "London",
        text: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
    },
    {
        city: "Dubai",
        text: "Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5, Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
    },
    {
        city: "Pune",
        text: "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
    },
];

const solutions = [
    "Core Banking CB7",
    "Digital Banking N7",
    "Open Banking",
    "Loan Origination System",
    "Loan Management System",
    "Digital Transformation",
];

const banking = [
    "About Us",
    "Solutions",
    "Contact",
    "Company",
    "Careers",
    "Insights",
    "Core Team",
    "Brand Center",
];

const socials = ["LinkedIn", "X"];

const Footer = () => {
    return (
        <footer className="overflow-hidden text-white">
            <div className="mx-auto max-w-360 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-14 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">

                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

                    <div className="flex shrink-0 justify-center lg:w-75 lg:justify-start xl:w-100">
                        <img
                            src={FooterLogo}
                            alt="N7 Logo"
                            className="w-full max-w-45 object-contain sm:max-w-60 lg:max-w-75 xl:max-w-100"
                        />
                    </div>

                    <div className="min-w-0 flex-1">

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {offices.map((office, index) => (
                                <div key={index}>
                                    <h3 className="font-archivo text-base font-medium text-[#E9F4F9] sm:text-lg">
                                        {office.city}
                                    </h3>

                                    <p className="mt-2 font-archivo text-sm leading-6 text-[#E9F4F9] opacity-80">
                                        {office.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-14 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-3 lg:mt-20 lg:gap-10">

                            <div>
                                <h3 className="mb-4 font-archivo text-base font-medium text-[#E9F4F9] sm:text-lg">
                                    Solutions
                                </h3>

                                <div>
                                    {solutions.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex cursor-pointer items-center justify-between gap-2 pb-2.5"
                                        >
                                            <span className="font-archivo text-sm text-[#E9F4F9] opacity-80 transition-all duration-300 group-hover:opacity-100">
                                                {item}
                                            </span>

                                            <ArrowRight
                                                size={14}
                                                className="shrink-0 text-[#00B4FD] transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-4 font-archivo text-base font-medium text-[#E9F4F9] sm:text-lg">
                                    N7 Banking
                                </h3>

                                <div>
                                    {banking.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex cursor-pointer items-center justify-between gap-2 pb-2.5"
                                        >
                                            <span className="font-archivo text-sm text-[#E9F4F9] opacity-80 transition-all duration-300 group-hover:opacity-100">
                                                {item}
                                            </span>

                                            <ArrowRight
                                                size={14}
                                                className="shrink-0 text-[#00B4FD] transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-4 font-archivo text-base font-medium text-[#E9F4F9] sm:text-lg">
                                    Our Socials
                                </h3>

                                <div>
                                    {socials.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex cursor-pointer items-center justify-between gap-2 pb-2.5"
                                        >
                                            <span className="font-archivo text-sm text-[#E9F4F9] opacity-80 transition-all duration-300 group-hover:opacity-100">
                                                {item}
                                            </span>

                                            <ArrowRight
                                                size={14}
                                                className="shrink-0 text-[#00B4FD] transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="mt-12 border-t border-white/10 pt-6">
                            <p className="font-archivo text-xs leading-6 text-[#E9F4F9] opacity-70 sm:text-sm">
                                Copyright © 2022 by Linktia Infosystems Limited
                                — [CB7 and N7 as Commercial Brand] —
                                [Registered under the Companies Act 2006 in
                                England and Wales | Number of Incorporation
                                13100992]
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;