"use client";
import {cn} from "@/lib/utils";
import {ArrowRight} from "lucide-react";
import React from "react";
import {useGlobalState} from "../providers/state-provider";
import {useRouter} from "next/navigation";
export default function MainLink({
    to,
    children,
    className,
    currentRoute,
}: {
    to: string;
    children: React.ReactNode;
    className?: string;
    currentRoute?: string;
}) {
    const store = useGlobalState();
    const router = useRouter();
    //@ts-expect-error
    const {setNewCurrentRoute} = store.currentRouteHandler; //@ts-expect-error
    const {setNewsearchKeyword} = store.searchKeywordHandler;
    return (
        <button
            aria-label={`${to} link`}
            title="go to settings page"
            onClick={() => {
                setNewsearchKeyword("");
                setNewCurrentRoute(currentRoute);
                router.replace(`http://localhost:3000/${to}`);
            }}
            className={
                (cn(className),
                " group/navigator  flex justify-between items-center p-1  w-full cursor-pointer")
            }
        >
            {children}
            <ArrowRight
                width={20}
                className=" hidden group-hover/navigator:block"
            />
        </button>
    );
}
