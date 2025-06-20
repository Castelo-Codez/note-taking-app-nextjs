import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useGlobalState} from "../providers/state-provider";

export default function CreateNewNote() {
    const store = useGlobalState();
    const router = useRouter(); //@ts-expect-error
    const {setNewCurrentRoute} = store.currentRouteHandler;
    async function create() {
        setNewCurrentRoute("All Notes");
        router.replace("http://localhost:3000/notes/all/create-new-note");
    }
    return (
        <Button onClick={create} className=" cursor-pointer w-[80%] block">
            Create A New Note
        </Button>
    );
}
