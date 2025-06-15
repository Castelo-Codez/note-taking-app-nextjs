"use client";
import {CircleAlert, Tag, Timer} from "lucide-react";
import {Button} from "../ui/button";
import {useIsMobile} from "@/hooks/use-mobile";
import {cn} from "@/lib/utils";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {useForm} from "react-hook-form";
export default function Form({
    title,
    lastEdited,
    tag,
    subject,
    isnew = true,
}: {
    title?: string;
    lastEdited?: string;
    tag?: string;
    subject?: string;
    isnew?: boolean;
    archived?: boolean;
}) {
    const isMobile = useIsMobile();
    const formSchema = z.object({
        title: z.string().nonempty().min(4).max(15),
        tag: z.string().nonempty().min(3).max(15),
        subject: z.string().nonempty().min(5),
    });

    const {handleSubmit, register, formState, setValue} = useForm<
        z.infer<typeof formSchema>
    >({
        resolver: zodResolver(formSchema),
    });

    const {errors} = formState;
    if (title && tag && subject) {
        setValue("title", title);
        setValue("tag", tag);
        setValue("subject", subject);
    }
    async function onSubmit(values: z.infer<typeof formSchema>) {}
    return (
        <>
            <div className=" px-4 sm:px-8  h-[105vh] sm:h-auto">
                <form className={cn(isMobile ? "mt-10" : "pt-7")}>
                    <div aria-label="input-wrapper" className=" mb-10">
                        <input
                            type="text"
                            className="w-full block p-1.5"
                            placeholder="Enter a title..."
                            {...register("title")}
                        />
                        {errors.title && (
                            <p className=" mt-3 pl-2 flex items-start sm:items-center gap-x-1 text-[0.79rem] text-red-700">
                                <CircleAlert width={15} />
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    <div aria-label="input-wrapper" className=" mb-10">
                        <div className="flex gap-x-7 sm:gap-x-14 items-center">
                            <div className="flex gap-x-2 ">
                                <Tag width={15} />
                                <span className=" text-[15px] capitalize">
                                    tags
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Add tags speparated by commas (e.g. work, planning)"
                                className=" block text-[0.7rem] placeholder:text-[0.7rem] w-full"
                                {...register("tag")}
                            />
                        </div>

                        <div className="">
                            {errors.tag && (
                                <p className=" mt-3 pl-2 flex items-start sm:items-center gap-x-1 text-[0.79rem] text-red-700">
                                    <CircleAlert width={15} />
                                    {errors.tag.message}
                                </p>
                            )}
                        </div>
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
                            value={true && lastEdited}
                            className=" block text-[0.7rem]  flex-[1] placeholder:text-[0.7rem]"
                            placeholder="not saved yet!"
                        />
                    </div>
                    <div aria-label="input-wrapper" className=" mb-3">
                        <textarea
                            id="SubjectTextArea"
                            className=" sm:resize-y w-full p-4 min-h-[40vh] border"
                            {...register("subject")}
                        ></textarea>
                        {errors.subject && (
                            <p className=" mt-3 pl-2 flex items-start sm:items-center gap-x-1 text-[0.79rem] text-red-700">
                                <CircleAlert width={15} />
                                {errors.subject.message}
                            </p>
                        )}
                    </div>
                </form>
                {!isMobile && (
                    <div
                        className={cn(
                            "mt-5 flex gap-x-5 sm:border-b lg:border-b-0 sm:pb-4 sm:mb-4 lg:pb-3 lg:mb-0"
                        )}
                    >
                        <Button
                            className=" px-3 py-0.5 cursor-pointer "
                            variant={"outline"}
                        >
                            Cancel
                        </Button>
                        <Button
                            className=" px-10 py-0.5 cursor-pointer "
                            onClick={handleSubmit(onSubmit)}
                        >
                            Save
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
}
