"use client";
import {useIsTablet} from "@/hooks/use-tablet";
import CreateNewNote from "./CreateNewNote";
import {cn} from "@/lib/utils";
export default function Nav() {
    const isTablet = useIsTablet();
    return (
        <>
            {!isTablet && (
                <nav
                    className={cn(
                        " border-r w-[220] pt-8 border-border h-full "
                    )}
                >
                    <div className=" flex justify-center">
                        <CreateNewNote />
                    </div>
                </nav>
            )}
        </>
    );
}
