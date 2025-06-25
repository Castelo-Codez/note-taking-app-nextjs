import {cn} from "@/lib/utils";
import {Button} from "../ui/button";
import {Archive, ArchiveRestore, Trash2} from "lucide-react";
import {useGlobalState} from "../providers/state-provider";
import {usePathname, useRouter} from "next/navigation";
import {BackToRootUrl} from "@/lib/backToRootUrl";
export default function ChangeStatus({
    isArchived = false,
    id,
}: {
    isArchived?: boolean;
    id?: string;
}) {
    const store = useGlobalState();
    //@ts-expect-error
    const {notes, setNewNotes} = store.notesHandler;
    const currentUrl = usePathname();
    const navRouter = useRouter();
    async function restoreNote() {
        BackToRootUrl(navRouter, currentUrl);

        setTimeout(() => {
            const newNotes = notes.map((el: {id: string}) => {
                if (el.id == id) {
                    return {
                        ...el,
                        isarchived: false,
                    };
                } else {
                    return el;
                }
            });
            setNewNotes(newNotes);
        }, 50);
    }

    async function archiveNote() {
        BackToRootUrl(navRouter, currentUrl);

        setTimeout(() => {
            const newNotes = notes.map((el: {id: string}) => {
                if (el.id == id) {
                    return {
                        ...el,
                        isarchived: true,
                    };
                } else {
                    return el;
                }
            });
            setNewNotes(newNotes);
        }, 50);
    }
    async function deleteNote() {
        BackToRootUrl(navRouter, currentUrl);

        setTimeout(() => {
            const newNotes = notes.filter((el: {id: string}) => el.id !== id);
            setNewNotes(newNotes);
        }, 50);
    }
    return (
        <section className={cn("pb-5 lg:pb-0 lg:border-l sm:pt-2 lg:pt-7")}>
            <ul role="list" className={cn(" flex flex-col gap-y-2 px-5")}>
                {isArchived ? (
                    <li>
                        <Button
                            onClick={() => {
                                restoreNote();
                            }}
                            className=" cursor-pointer w-full  flex items-center"
                            variant={"outline"}
                        >
                            <ArchiveRestore width={20} />
                            Restore Note
                        </Button>
                    </li>
                ) : (
                    <li>
                        <Button
                            onClick={archiveNote}
                            className=" cursor-pointer w-full  flex items-center"
                            variant={"outline"}
                        >
                            <Archive width={20} />
                            Archive Note
                        </Button>
                    </li>
                )}

                <li>
                    <Button
                        onClick={deleteNote}
                        className=" cursor-pointer w-full  flex items-center"
                        variant={"outline"}
                    >
                        <Trash2 width={20} />
                        Delete Note
                    </Button>
                </li>
            </ul>
        </section>
    );
}
