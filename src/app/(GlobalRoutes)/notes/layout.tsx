import MainSection from "@/components/composed-components/MainNoteHanderSection";
import React from "react";
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <MainSection>{children}</MainSection>
        </>
    );
}
