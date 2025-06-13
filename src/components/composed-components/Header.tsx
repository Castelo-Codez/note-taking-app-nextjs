"use client";
import {useIsMobile} from "@/hooks/use-mobile";
import CurrentRoute from "./CurrentRoute";
import Search from "./SearchInput";
import {Settings} from "lucide-react";
import Logo from "./Logo";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {useGlobalState} from "../providers/state-provider";

export default function Header() {
    const isMobile = useIsMobile();
    const store = useGlobalState();
    //@ts-expect-error
    const {setNewCurrentRoute} = store.currentRouteHandler;
    const router = useRouter();
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
                    <button
                        aria-label="settings link"
                        title="go to settings page"
                        onClick={() => {
                            router.replace("http://localhost:3000/settings");
                            setNewCurrentRoute("settings");
                        }}
                        className="flex justify-between items-center p-1  cursor-pointer"
                    >
                        <Settings width={20} />
                    </button>
                </div>
            )}
        </header>
    );
}
