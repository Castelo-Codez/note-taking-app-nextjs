"use client";
import {useIsMobile} from "@/hooks/use-mobile";
import CurrentRoute from "./CurrentRoute";
import Search from "./SearchInput";
import {Settings} from "lucide-react";
import Logo from "./Logo";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {useGlobalState} from "../providers/state-provider";
import MainLink from "./MainLink";

export default function Header() {
    const isMobile = useIsMobile();
    const store = useGlobalState();
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

                    <MainLink
                        to="/settings"
                        needicon={false}
                        currentRoute="Settings"
                        className="flex justify-between items-center p-1 w-fit  cursor-pointer"
                    >
                        <Settings width={20} />
                    </MainLink>
                </div>
            )}
        </header>
    );
}
