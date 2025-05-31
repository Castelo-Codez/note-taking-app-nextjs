import {cn} from "@/lib/utils";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import React from "react";
export default function MainLink({
    to,
    children,
    className,
}: {
    to: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Link
            href={`${to}`}
            className={
                (cn(className),
                " group/navigator  flex justify-between items-center p-1 ")
            }
        >
            {children}
            <ArrowRight
                width={20}
                className=" hidden group-hover/navigator:block"
            />
        </Link>
    );
}
