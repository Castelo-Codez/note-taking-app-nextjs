"use client";
import Link from "next/link";
import {Archive, Home, Search, Settings, Tag} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
export default function MobileNav() {
    const ICON_WIDTH = 18;
    const isMobile = useIsMobile();
    return (
        <>
            {isMobile && (
                <nav className=" absolute bottom-0 left-0 w-full h-[50px] px-3 border-t border-border flex items-center">
                    <ul className=" flex  w-full">
                        <li className=" flex-[1] py-2 flex justify-center">
                            <Link href={"/notes/all"}>
                                <Home width={ICON_WIDTH} />
                            </Link>
                        </li>
                        <li className=" flex-[1] py-2 flex justify-center">
                            <Link href={"/settings"}>
                                <Settings width={ICON_WIDTH} />
                            </Link>
                        </li>
                        <li className=" flex-[1] py-2 flex justify-center">
                            <Link href={"/notes/search"}>
                                <Search width={ICON_WIDTH} />
                            </Link>
                        </li>
                        <li className=" flex-[1] py-2 flex justify-center">
                            <Link href={"/notes/archived"}>
                                <Archive width={ICON_WIDTH} />
                            </Link>
                        </li>
                        <li className=" flex-[1] py-2 flex justify-center">
                            <Link href={"/"}>
                                <Tag width={ICON_WIDTH} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}
