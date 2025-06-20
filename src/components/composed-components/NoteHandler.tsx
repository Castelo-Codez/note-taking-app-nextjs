"use client";
import {useIsMobile} from "@/hooks/use-mobile";
import Form from "./NoteHandlerForm";
import ChangeStatus from "./RestoreOrArchiveOrDelete";
import {cn} from "@/lib/utils";
export default function NoteHandler({
    title,
    tag,
    subject,
    lastedited,
    isarchived = false,
    isnew = true,
    id,
}: {
    title?: string;
    tag?: string;
    subject?: string;
    lastedited?: string;
    isarchived?: boolean;
    isnew?: boolean;
    id?: string;
}) {
    const ismobile = useIsMobile();
    return (
        <>
            <section
                className={cn(
                    "pb-8 md:pl-8  grid min-h-full grid-cols-1 lg:grid-cols-[3fr_1fr]"
                )}
            >
                <Form
                    {...{
                        tag,
                        id,
                        title,
                        subject,
                        isnew,
                        isarchived,
                        lastedited,
                    }}
                />
                {!ismobile && <ChangeStatus isArchived={false} />}
            </section>
        </>
    );
}
