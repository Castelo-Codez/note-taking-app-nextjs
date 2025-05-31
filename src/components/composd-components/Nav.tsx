"use client";
import {useIsTablet} from "@/hooks/use-tablet";
import CreateNewNote from "./CreateNewNote";

export default function Nav() {
    const isTablet = useIsTablet();
    return (
        <>
            {!isTablet && (
                <nav className=" w-[240px] border-r pt-8 border-border h-full ">
                    <div className=" flex justify-center">
                        <CreateNewNote />
                    </div>
                </nav>
            )}
        </>
    );
}
