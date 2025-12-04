"use client";

import { FC, ReactNode } from "react";

interface TextShimmerProps {
    children: ReactNode;
    className?: string;
}

export const TextShimmer: FC<TextShimmerProps> = ({ children, className = "" }) => {
    return (
        <span
            className={`relative inline-block bg-[linear-gradient(110deg,#0f172a,45%,#60a5fa,55%,#0f172a)] bg-[length:250%_100%] bg-clip-text text-transparent animate-shimmer ${className}`}
        >
            {children}
        </span>
    );
};
