import Nav from "@/components/composed-components/Nav";
import React from "react";
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Nav condition={true} />
            {children}
        </>
    );
}
