"use client";
import {useIsTablet} from "@/hooks/use-tablet";
import CreateNewNote from "./CreateNewNote";
import {cn} from "@/lib/utils";
import {useGlobalState} from "../providers/state-provider";
import {Badge} from "../ui/badge";
import {Button} from "../ui/button";
import {useRouter} from "next/navigation";
import Link from "next/link";
export default function Nav() {
    const isTablet = useIsTablet();
    const store = useGlobalState();
    const router = useRouter();
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
                    <ul className=" mt-8 pl-[24px]">
                        {notes.map(
                            (el: {
                                title: string;
                                id: string;
                                subject: string;
                                tag: string;
                                lastedited: string;
                            }) => {
                                return (
                                    <li key={el.id} className="flex ">
                                        <Link
                                            href={`/notes/all/${el.id}`}
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
