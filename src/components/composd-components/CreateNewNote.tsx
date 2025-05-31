"use client";
import {Button} from "@/components/ui/button";
export default function CreateNewNote() {
    async function createNewNote() {
        console.log("create new note");
    }
    return (
        <Button
            onClick={createNewNote}
            className=" cursor-pointer w-[80%] block"
        >
            Create A New Note
        </Button>
    );
}
