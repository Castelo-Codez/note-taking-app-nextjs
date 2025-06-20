"use client";
import {cn} from "@/lib/utils";
import {ArrowRight} from "lucide-react";
import React, {useState} from "react";
import {useGlobalState} from "../providers/state-provider";
import {useRouter} from "next/navigation";
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
// } from "@/components/ui/alert-dialog";
export default function MainLink({
    to,
    children,
    className,
    currentRoute,
    needicon,
}: {
    to: string;
    children: React.ReactNode;
    className?: string;
    currentRoute?: string;
    needicon: boolean;
}) {
    const store = useGlobalState();
    const router = useRouter();
    //@ts-expect-error
    const {setNewCurrentRoute} = store.currentRouteHandler;
    //@ts-expect-error
    const {setNewsearchKeyword} = store.searchKeywordHandler;

    return (
        <>
            <button
                aria-label={`${to} link`}
                title="go to settings page"
                onClick={() => {
                    setNewsearchKeyword((prev: string) => {
                        return "";
                    });
                    setNewCurrentRoute((prev: string) => {
                        return currentRoute;
                    });
                    router.replace(`http://localhost:3000/${to}`);
                }}
                className={cn(
                    " group/navigator  flex justify-between items-center p-1  w-full cursor-pointer",
                    className
                )}
            >
                {children}
                {needicon && (
                    <ArrowRight
                        width={20}
                        className=" hidden group-hover/navigator:block"
                    />
                )}
            </button>
            {/* {show && (
                <AlertDialog open={show} onOpenChange={setNewShow}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                This will delete your changes data from our
                                servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className=" cursor-pointer">
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                                className=" cursor-pointer"
                                onClick={() => {
                                    clearNotes();
                                    setNewsearchKeyword((prev: string) => {
                                        return "";
                                    });
                                    setNewCurrentRoute((prev: string) => {
                                        return currentRoute;
                                    });
                                    router.replace(
                                        `http://localhost:3000/${to}`
                                    );
                                }}
                            >
                                Continue
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )} */}
        </>
    );
}
