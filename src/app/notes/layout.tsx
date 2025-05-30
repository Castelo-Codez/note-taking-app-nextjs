import {SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/composd-components/app-sidebar";
import Header from "@/components/composd-components/Header";
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <Header />
                {children}
            </main>
        </SidebarProvider>
    );
}
