"use client";
import {cn} from "@/lib/utils";
import {ArrowRight} from "lucide-react";
import React, {useState} from "react";
import {useGlobalState} from "../providers/state-provider";
import {useRouter} from "next/navigation";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
    //@ts-expect-error
    const {ClearNoteChanges} = store;
    const router = useRouter();
    //@ts-expect-error
    const {setNewCurrentRoute} = store.currentRouteHandler;
    //@ts-expect-error
    const {setNewsearchKeyword} = store.searchKeywordHandler;

    const [show, setNewShow] = useState<boolean>(false);
    return (
        <>
            <button
                aria-label={`${to} link`}
                title="go to settings page"
                onClick={() => {
                    if (
                        //@ts-expect-error
                        store.isNoteChange.current.tag.new !==
                            //@ts-expect-error
                            store.isNoteChange.current.tag.old ||
                        //@ts-expect-error
                        store.isNoteChange.current.title.new !==
                            //@ts-expect-error
                            store.isNoteChange.current.title.old ||
                        //@ts-expect-error
                        store.isNoteChange.current.subject.new !==
                            //@ts-expect-error
                            store.isNoteChange.current.subject.old
                    ) {
                        setNewShow(!show);
                    } else {
                        setNewsearchKeyword("");
                        setNewCurrentRoute(currentRoute);
                        router.replace(`http://localhost:3000/${to}`);
                    }
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
            {show && (
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
                                    setNewsearchKeyword("");
                                    setNewCurrentRoute(currentRoute);
                                    ClearNoteChanges();
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
            )}
        </>
    );
}
