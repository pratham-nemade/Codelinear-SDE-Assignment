import React from "react";
import clsx from "clsx";

const variants = {
    primary:
        "bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] text-white border-transparent hover:opacity-90",

    outline:
        "border border-[#E9F4F9] text-white hover:bg-white hover:text-black",

    dark:
        "bg-black text-white hover:bg-neutral-800",
};

const sizes = {
    sm: "px-5 py-2 text-[12px]",
    md: "px-8 py-3 text-[14px]",
    lg: "px-10 py-4 text-[15px]",
};

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                "font-chivo cursor-pointer rounded-xl uppercase tracking-[0.14em] transition-all duration-300",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;