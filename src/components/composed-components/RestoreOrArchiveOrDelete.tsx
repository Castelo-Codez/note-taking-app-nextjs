import {cn} from "@/lib/utils";
import {Button} from "../ui/button";

import {useIsTablet} from "@/hooks/use-tablet";
import {useIsMobile} from "@/hooks/use-mobile";
import {  Archive, ArchiveRestore,Trash2 } from "lucide-react";
export default function ChangeStatus({
    isArchived = false,
}: {
    isArchived: boolean;
    delete?: void;
    archive?: void;
    restore?: void;
}) {
    const isTablet = useIsTablet();
    const isMobile = useIsMobile();
    return (
        <section
            className={cn(
                !isMobile ? " border-l" : "",
                cn(isMobile ? "mt-10" : "pt-7")
            )}
        >
            <ul
                role="list"
                className={cn(
                    " flex flex-col gap-y-2 px-5",
                    isTablet ? "mt-8" : ""
                )}
            >
                {isArchived ? (
                    <li>
                        <Button
                            className=" cursor-pointer w-full  flex items-center"
                            variant={"outline"}
                        >
                            <ArchiveRestore width={20}/>
                            Restore Note
                        </Button>
                    </li>
                ) : (
                    <li>
                        <Button
                            className=" cursor-pointer w-full  flex items-center"
                            variant={"outline"}
                            >
                            <Archive width={20}/>
                            Archive Note
                        </Button>
                    </li>
                )}

                <li>
                    <Button
                        className=" cursor-pointer w-full  flex items-center"
                        variant={"outline"}
                    >
                        <Trash2 width={20}/>
                        Delete Note
                    </Button>
                </li>
            </ul>
        </section>
    );
}
