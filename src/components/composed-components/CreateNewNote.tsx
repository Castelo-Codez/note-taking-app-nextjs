import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function CreateNewNote() {
    const router = useRouter();
    async function create() {
        router.replace("http://localhost:3000/notes/all/create-new-note");
    }
    return (
        <Button onClick={create} className=" cursor-pointer w-[80%] block">
            Create A New Note
        </Button>
    );
}
