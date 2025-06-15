import LoadingSvg from "@/components/composed-components/LoadingSvg";
import MainSection from "@/components/composed-components/MainNoteHanderSection";
import Nav from "@/components/composed-components/Nav";
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <MainSection>
                {children}
            </MainSection>
        </>
    );
}
