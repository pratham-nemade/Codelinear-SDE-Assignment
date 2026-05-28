import React from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

const TextLink = ({
    children,
    href = "#",
    className,
    arrow = true,
    ...props
}) => {
    return (
        <a
            href={href}
            className={clsx(
                "group font-chivo relative inline-flex items-center gap-2 pb-2 text-[12px] uppercase tracking-[0.14em] text-[#00B4FD] transition-all duration-300 hover:text-white",
                className
            )}
            {...props}
        >
            {children}

            {arrow && (
                <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            )}

            <span className="absolute bottom-0 left-0 h-px w-[40%] bg-[#00B4FD]" />
        </a>
    );
};

export default TextLink;