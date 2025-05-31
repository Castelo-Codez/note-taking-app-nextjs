"use client";

import {useIsMobile} from "@/hooks/use-mobile";
import {cn} from "@/lib/utils";
import React from "react";
export default function MainSection({children}: {children: React.ReactNode}) {
    const isMobile = useIsMobile();
    return (
        <section
            className={cn(
                isMobile ? "h-[calc(100vh_-_69px)]" : "h-[calc(100vh_-_77px)]",
                " relative"
            )}
        >
            {children}
        </section>
    );
}
