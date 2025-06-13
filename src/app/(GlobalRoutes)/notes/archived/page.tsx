import MainSection from "@/components/composed-components/MainNoteHanderSection";
import Nav from "@/components/composed-components/Nav";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: "Archived Notes",
    description: "Note Taking App | Archived Notes",
};
export default function Archived() {
    return (
        <>
            <MainSection>
                <Nav />
            </MainSection>
        </>
    );
}
