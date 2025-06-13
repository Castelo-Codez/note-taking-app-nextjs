"use client";
import {useIsMobile} from "@/hooks/use-mobile";
import {useIsTablet} from "@/hooks/use-tablet";
import {cn} from "@/lib/utils";
import React from "react";
export default function MainSection({children}: {children: React.ReactNode}) {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    return (
        <section
            className={cn(
                "grid relative",
                isMobile
                    ? "h-[calc(100vh_-_69px)]  "
                    : "h-[calc(100vh_-_77px)]  grid-cols-[auto_1fr] ",
                isTablet ? "grid-cols-1 " : ""
            )}
        >
            {children}
        </section>
    );
}
