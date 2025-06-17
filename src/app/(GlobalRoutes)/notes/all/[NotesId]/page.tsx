"use client";
import Nav from "@/components/composed-components/Nav";
import NoteHandler from "@/components/composed-components/NoteHandler";
import {useGlobalState} from "@/components/providers/state-provider";
import {useParams} from "next/navigation";
export default function Note() {
    const {NotesId} = useParams<{NotesId: string}>();
    const store = useGlobalState();
    //@ts-expect-error
    const {notes} = store.notesHandler;
    const targetNote = notes.find((el: {id: string}) => el.id === NotesId);
    return (
        <>
            <Nav />
            <NoteHandler {...targetNote} isnew={false} />
        </>
    );
}
