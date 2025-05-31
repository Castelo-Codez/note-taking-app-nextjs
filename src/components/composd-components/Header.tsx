"use client";
import {useIsMobile} from "@/hooks/use-mobile";
import CurrentRoute from "./CurrentRoute";
import Search from "./SearchInput";
import {Settings} from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import {cn} from "@/lib/utils";

export default function Header() {
    const isMobile = useIsMobile();
    return (
        <header
            className={cn(
                " py-5 border-b border-border flex items-center justify-between  w-full",
                [isMobile ? "px-2" : "px-7"]
            )}
        >
            {isMobile && <Logo />}
            {!isMobile && <CurrentRoute />}
            {!isMobile && (
                <div className=" flex gap-x-4 items-center">
                    <Search />
                    <Link href={"/settings"} className=" cursor-pointer">
                        <Settings width={20} />
                    </Link>
                </div>
            )}
        </header>
    );
}
