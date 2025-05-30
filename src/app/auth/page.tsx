import type {Metadata} from "next";
import PageContent from "./PageContent";
export const metadata: Metadata = {
    title: "Auth",
};
export default function Auth() {
    return (
        <>
            <PageContent />
        </>
    );
}
