"use client";
import NoteHandler from "@/components/composed-components/NoteHandler";
import {useGlobalState} from "@/components/providers/state-provider";
export function Note({NotesId}: {NotesId: string}) {
    const store = useGlobalState();
    //@ts-expect-error
    const {notes} = store.notesHandler;
    const targetNote = notes.find((el: {id: string}) => el.id === NotesId);
    return (
        <>
            <NoteHandler {...targetNote} isnew={false} />
        </>
    );
}
