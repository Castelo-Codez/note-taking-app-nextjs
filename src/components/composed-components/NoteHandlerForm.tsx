"use client";
import {CircleAlert, Tag, Timer, Triangle} from "lucide-react";
import {Button} from "../ui/button";
import uniqid from "uniqid";
import {useIsMobile} from "@/hooks/use-mobile";
import {cn} from "@/lib/utils";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useGlobalState} from "../providers/state-provider";
import {useRouter as navigationRouter, usePathname} from "next/navigation";
import {BackToRootUrl} from "@/lib/backToRootUrl";

export default function Form({
    title,
    lastedited,
    tag,
    subject,
    isnew = true,
    isarchived = false,
    id,
}: {
    title?: string | undefined;
    lastedited?: string | undefined;
    tag?: string | undefined;
    subject?: string | undefined;
    isnew?: boolean | undefined;
    isarchived?: boolean | undefined;
    id: string | undefined;
}) {
    const url = usePathname();

    const navrouter = navigationRouter();
    const store = useGlobalState();
    //@ts-expect-error
    const {notes, setNewNotes} = store.notesHandler;
    const isMobile = useIsMobile();
    const formSchema = z.object({
        title: z.string().nonempty().min(4).max(20),
        tag: z.string().nonempty().min(3).max(20),
        subject: z.string().nonempty().min(5),
    });

    const {handleSubmit, register, formState, watch} = useForm<
        z.infer<typeof formSchema>
    >({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: title,
            tag: tag,
            subject: subject,
        },
    });
    let month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const {errors} = formState;
    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (values) {
            if (isnew) {
                setNewNotes([
                    ...notes,
                    {
                        ...values,
                        id: uniqid(),
                        lastedited: `${new Date().getDate()} ${
                            month[new Date().getMonth() - 1]
                        } ${new Date().getFullYear()}`,
                    },
                ]);
                navrouter.replace("http://localhost:3000/notes/all");
            } else {
                const updatedNotes = notes.map(
                    (el: {
                        title: string;
                        subject: string;
                        id: string;
                        isarchived: boolean;
                        lastedited: string;
                    }) => {
                        if (el.id === id) {
                            el = {
                                ...values,
                                id,
                                isarchived,
                                lastedited: `${new Date().getDate()} ${
                                    month[new Date().getMonth() - 1]
                                } ${new Date().getFullYear()}`,
                            };
                            return el;
                        } else {
                            return el;
                        }
                    }
                );
                setNewNotes(updatedNotes);
                navrouter.replace("http://localhost:3000/notes/all");
            }
        }
    }

    return (
        <>
            <div className=" px-4 sm:px-8  h-[105vh] sm:h-auto">
                <form
                    className={cn(isMobile ? "mt-10" : "pt-7")}
                    onSubmit={handleSubmit(onSubmit)}
                >
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
                    {isarchived && (
                        <div className=" mb-10">
                            <div className="flex gap-x-7 sm:gap-x-14 items-center">
                                <div className="flex gap-x-2 ">
                                    <Triangle width={15} />
                                    <span className=" text-[15px] capitalize">
                                        Status
                                    </span>
                                </div>
                                <span className=" text-[0.7rem]">Archived</span>
                            </div>
                        </div>
                    )}
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
                            value={true && lastedited}
                            className=" block text-[0.7rem]  flex-[1] placeholder:text-[0.7rem]"
                            placeholder="not saved yet!"
                            disabled
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

                    {!isMobile && (
                        <div
                            className={cn(
                                "mt-5 flex gap-x-5 sm:border-b lg:border-b-0 sm:pb-4 sm:mb-4 lg:pb-3 lg:mb-0"
                            )}
                        >
                            <Button
                                className=" px-3 py-0.5 cursor-pointer "
                                variant={"outline"}
                                type="button"
                                onClick={() => {
                                    BackToRootUrl(navrouter, url);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className={cn(" px-10 py-0.5 cursor-pointer")}
                                disabled={
                                    errors.subject || errors.tag || errors.title
                                        ? true
                                        : false
                                }
                            >
                                {isnew ? "Create New Note" : "Save Changes"}
                            </Button>
                        </div>
                    )}
                </form>
            </div>
        </>
    );
}
