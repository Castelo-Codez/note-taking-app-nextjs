"use client";
import {useIsMobile} from "@/hooks/use-mobile";
import Form from "./NoteHandlerForm";
import ChangeStatus from "./RestoreOrArchiveOrDelete";
import {cn} from "@/lib/utils";
export default function NoteHandler() {
    const ismobile = useIsMobile();
    return (
        <>
            <section
                className={cn(
                    "pb-8 md:pl-8  grid min-h-full grid-cols-1 lg:grid-cols-[3fr_1fr]"
                )}
            >
                <Form />
                {!ismobile && <ChangeStatus isArchived={false} />}
            </section>
        </>
    );
}
