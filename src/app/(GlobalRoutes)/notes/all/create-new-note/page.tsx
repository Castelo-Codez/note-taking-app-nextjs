import Nav from "@/components/composed-components/Nav";
import NoteHandler from "@/components/composed-components/NoteHandler";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: "Create New Notes",
    description: "Note Taking App | Create New Notes",
};

export default function CreateNewNote() {
    return (
        <>
            <Nav />
            <NoteHandler isnew={true} />
        </>
    );
}
