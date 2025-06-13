"use client";
import {Tag, Timer} from "lucide-react";
import {Button} from "../ui/button";
import {useIsMobile} from "@/hooks/use-mobile";
import {cn} from "@/lib/utils";
import {useIsTablet} from "@/hooks/use-tablet";
export default function Form() {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    return (
        <>
            <div className=" px-8">
                <form className={cn(isMobile ? "mt-10" : "pt-7")}>
                    <div aria-label="input-wrapper" className=" mb-10">
                        <input
                            type="text"
                            className="w-full block p-1.5"
                            placeholder="Enter a title..."
                            name="title"
                        />
                    </div>
                    <div
                        aria-label="input-wrapper"
                        className=" flex gap-x-7 sm:gap-x-14 items-center mb-10"
                    >
                        <div className="flex gap-x-2 ">
                            <Tag width={15} />
                            <span className=" text-[15px] capitalize">
                                tags
                            </span>
                        </div>
                        <input
                            type="text"
                            name="tag"
                            placeholder="Add tags speparated by commas (e.g. work, planning)"
                            className=" block text-[0.7rem] placeholder:text-[0.7rem]"
                        />
                    </div>
                    <div
                        aria-label="input-wrapper"
                        className="flex gap-x-12 sm:gap-x-14 items-center    mb-7  pb-5 border-b "
                    >
                        <div className="flex gap-x-2 ">
                            <Timer width={15} />
                            <span className=" text-[15px] capitalize">
                                last edited
                            </span>
                        </div>
                        <input
                            type="text"
                            name="last-edited"
                            className=" block text-[0.7rem] placeholder:text-[0.7rem]"
                            placeholder="not saved yet!"
                        />
                    </div>
                    <div aria-label="input-wrapper" className=" mb-3">
                        <textarea
                            name="subject"
                            id="SubjectTextArea"
                            className=" sm:resize-y w-full p-4 min-h-[40vh] border"
                        ></textarea>
                    </div>
                </form>
                {!isMobile && (
                    <div
                        className={cn(
                            'mt-5 flex gap-x-5',
                            isTablet ? "border-b py-2" : ""
                        )}
                    >
                        <Button
                            className=" px-3 py-0.5 cursor-pointer "
                            variant={"outline"}
                        >
                            Cancel
                        </Button>
                        <Button className=" px-10 py-0.5 cursor-pointer ">
                            Save
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
}

