import Nav from "@/components/composed-components/Nav";
import NoteHandler from "@/components/composed-components/NoteHandler";
import { useGlobalState } from "@/components/providers/state-provider";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: "Create New Notes",
    description: "Note Taking App | Create New Notes",
};

export default function CreateNewNote() {
    return (
        <>
            <NoteHandler isnew={true} />
        </>
    );
}
