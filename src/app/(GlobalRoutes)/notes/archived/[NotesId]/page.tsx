import type {Metadata} from "next";
import {Note} from "@/components/composed-components/NotePage";
type Props = {
    params: Promise<{NotesId: string}>;
};
export async function generateMetadata({params}: Props): Promise<Metadata> {
    const NotesId = (await params).NotesId;
    return {
        title: NotesId,
        description: NotesId,
    };
}

export default async function NotePage({params}: Props) {
    const {NotesId} = await params;
    return (
        <>
            <Note NotesId={NotesId} />
        </>
    );
}
