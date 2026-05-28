import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 10);

            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClick = () => {
            setOpenMenu(null);
        };

        if (openMenu) {
            document.addEventListener("click", handleClick);
        }

        return () => document.removeEventListener("click", handleClick);
    }, [openMenu]);

    const toggleMenu = (menu, e) => {
        e.stopPropagation();
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const navLinks = [
        {
            label: "Solutions",
            key: "solutions",
            dropdown: ["Enterprise", "Startups", "Developers", "Agencies"],
        },
        {
            label: "Resources",
            key: "resources",
            dropdown: ["Documentation", "Blog", "Case Studies", "Support"],
        },
        {
            label: "About Us",
            key: "about",
        },
    ];

    return (
        <div
            className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-transform duration-300 ${showNavbar
                ? "translate-y-0 pt-6"
                : "translate-y-[-140%]"
                }`}
        >
            <nav
                className={`w-full max-w-179 rounded-xl border border-none bg-[#2F2F2FB2] backdrop-blur-xl transition-all duration-300 ${scrolled
                    ? "shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                    : "shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    }`}
            >
                <div className="flex items-center justify-between px-3 py-2">
                    <a
                        href="/"
                        className="font-archivo select-none text-[24px] tracking-wide text-[#E9F4F9] no-underline"
                    >
                        N7
                    </a>

                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <div key={link.key} className="relative">
                                    <button
                                        onClick={(e) => toggleMenu(link.key, e)}
                                        className="group flex items-center gap-1"
                                    >
                                        <span className="font-chivo text-[12px] uppercase tracking-[0.12em] text-[#E9F4F9] transition-opacity duration-200 group-hover:opacity-60">
                                            {link.label}
                                        </span>

                                        <ChevronDown
                                            size={14}
                                            className={`text-white transition-transform duration-300 ${openMenu === link.key
                                                ? "rotate-180"
                                                : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`absolute left-1/2 top-[calc(100%+12px)] min-w-40 -translate-x-1/2 rounded-xl border border-white/10 bg-[#1E1E1E] p-2 shadow-2xl transition-all duration-200 ${openMenu === link.key
                                            ? "visible translate-y-0 opacity-100"
                                            : "invisible -translate-y-2 opacity-0"
                                            }`}
                                    >
                                        {link.dropdown.map((item) => (
                                            <a
                                                key={item}
                                                href="#"
                                                className="font-chivo block rounded-md px-3 py-2 text-[11px] font-medium uppercase tracking-widest text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
                                            >
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a
                                    key={link.key}
                                    href="#"
                                    className="font-chivo text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-opacity duration-200 hover:opacity-60"
                                >
                                    {link.label}
                                </a>
                            )
                        )}
                    </div>

                    <div className="hidden lg:block">
                        <button className="font-chivo cursor-pointer rounded-lg border border-white px-10 py-1 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-gray-200 hover:text-[#2F2F2F]">
                            Request Demo
                        </button>
                    </div>

                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="flex items-center justify-center text-white lg:hidden"
                    >
                        {mobileMenu ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${mobileMenu ? "max-h-125 pb-4" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 px-4 pt-2">
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <div key={link.key}>
                                    <button
                                        onClick={(e) => toggleMenu(link.key, e)}
                                        className="flex w-full items-center justify-between text-left"
                                    >
                                        <span className="font-chivo text-[12px] font-medium uppercase tracking-[0.12em] text-[#E9F4F9]">
                                            {link.label}
                                        </span>

                                        <ChevronDown
                                            size={16}
                                            className={`text-white transition-transform duration-300 ${openMenu === link.key
                                                ? "rotate-180"
                                                : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openMenu === link.key
                                            ? "mt-3 max-h-60"
                                            : "max-h-0"
                                            }`}
                                    >
                                        <div className="flex flex-col gap-2 rounded-lg bg-white/5 p-2">
                                            {link.dropdown.map((item) => (
                                                <a
                                                    key={item}
                                                    href="#"
                                                    className="font-chivo rounded-md px-3 py-2 text-[11px] font-medium uppercase tracking-widest text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
                                                >
                                                    {item}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <a
                                    key={link.key}
                                    href="#"
                                    className="font-chivo text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-opacity duration-200 hover:opacity-60"
                                >
                                    {link.label}
                                </a>
                            )
                        )}

                        <button className="font-chivo mt-2 w-full cursor-pointer rounded-lg border px-4 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#2F2F2F]">
                            Request Demo
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;