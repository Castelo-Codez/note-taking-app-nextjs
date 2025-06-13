import {SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/composed-components/Appsidebar";
import Header from "@/components/composed-components/Header";
import React from "react";
import {GlobalStateProvider} from "@/components/providers/state-provider";
import MobileNav from "@/components/composed-components/MobileNav";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <GlobalStateProvider>
            <SidebarProvider>
                <AppSidebar />
                <main className=" w-full">
                    <Header />
                    {children}
                </main>
            </SidebarProvider>
            <MobileNav />
        </GlobalStateProvider>
    );
}
