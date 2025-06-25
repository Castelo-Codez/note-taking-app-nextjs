"use client";
import {useIsTablet} from "@/hooks/use-tablet";
import CreateNewNote from "./CreateNewNote";
import {cn} from "@/lib/utils";
import {Badge} from "../ui/badge";
import Link from "next/link";
import {useGlobalState} from "../providers/state-provider";
import {usePathname} from "next/navigation";
export default function Nav({condition}: {condition: boolean}) {
    const isTablet = useIsTablet();
    const store = useGlobalState();
    const path = usePathname();
    const currentSec = path.match(/(?<=\/notes\/)(archived|all|\w+)$/)?.[0];
    //@ts-expect-error
    const {notes} = store.notesHandler;
    const filterdNotes = notes.filter(
        (el: {isarchived: boolean}) => el.isarchived === condition
    );
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
                    <ul className=" mt-8 pl-[24px]">
                        {filterdNotes.map(
                            (el: {
                                title: string;
                                id: string;
                                subject: string;
                                tag: string;
                                lastedited: string;
                                isarchived: boolean;
                            }) => {
                                return (
                                    <li key={el.id} className="flex ">
                                        <Link
                                            href={`/notes/${currentSec}/${el.id}`}
                                            className=" w-[90%] py-3 px-2  flex flex-col gap-y-2 rounded-xl hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50  "
                                        >
                                            <span className=" text-[0.7rem]">
                                                {el.title}
                                            </span>
                                            <Badge className=" text-[0.7rem]">
                                                {el.tag}
                                            </Badge>
                                            <span className=" text-[0.7rem]">
                                                {el.lastedited}
                                            </span>
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
