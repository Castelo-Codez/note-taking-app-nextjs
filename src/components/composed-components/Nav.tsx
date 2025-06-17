"use client";
import {useIsTablet} from "@/hooks/use-tablet";
import CreateNewNote from "./CreateNewNote";
import {cn} from "@/lib/utils";
import {useGlobalState} from "../providers/state-provider";
import Link from "next/link";
export default function Nav() {
    const isTablet = useIsTablet();
    const store = useGlobalState();

    //@ts-expect-error
    const {notes} = store.notesHandler;
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
                    <ul className=" mt-5">
                        {notes.map(
                            (el: {
                                title: string;
                                id: string;
                                subject: string;
                            }) => {
                                return (
                                    <li key={el.id}>
                                        <Link href={`/notes/all/${el.id}`}>
                                            {el.title}
                                        </Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </nav>
            )}
        </>
    );
}
