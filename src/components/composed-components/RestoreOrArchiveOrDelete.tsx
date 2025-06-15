import {cn} from "@/lib/utils";
import {Button} from "../ui/button";

import {useIsTablet} from "@/hooks/use-tablet";
import {useIsMobile} from "@/hooks/use-mobile";
import {Archive, ArchiveRestore, Trash2} from "lucide-react";
export default function ChangeStatus({
    isArchived = false,
}: {
    isArchived: boolean;
    delete?: void;
    archive?: void;
    restore?: void;
}) {
    return (
        <section className={cn("pb-5 lg:pb-0 lg:border-l sm:pt-2 lg:pt-7")}>
            <ul role="list" className={cn(" flex flex-col gap-y-2 px-5")}>
                {isArchived ? (
                    <li>
                        <Button
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
