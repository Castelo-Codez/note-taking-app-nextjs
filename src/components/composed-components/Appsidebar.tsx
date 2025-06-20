import MainLink from "@/components/composed-components/MainLink";
import {Sidebar, SidebarGroup, SidebarHeader} from "@/components/ui/sidebar";
import {Archive, Home} from "lucide-react";
import Logo from "./Logo";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <Logo className=" mt-5 mb-7" />
            </SidebarHeader>
            <SidebarGroup className=" mb-5  px-3">
                <ul className=" flex flex-col gap-y-2.5">
                    <li>
                        <MainLink
                            to="/notes/all"
                            needicon={true}
                            currentRoute="All Notes"
                        >
                            <div className=" flex items-center gap-x-2">
                                <Home width={20} />
                                <p className=" text-[0.8rem]"> All Notes</p>
                            </div>
                        </MainLink>
                    </li>
                    <li>
                        <MainLink
                            needicon={true}
                            to="/notes/archived"
                            currentRoute="Archived Notes"
                        >
                            <div className=" flex items-center gap-x-2">
                                <Archive width={20} />
                                <p className=" text-[0.8rem]">Archived Notes</p>
                            </div>
                        </MainLink>
                    </li>
                </ul>
            </SidebarGroup>
        </Sidebar>
    );
}
