export default async function Note({
    params,
}: {
    params: Promise<{NoteId: string}>;
}) {
    const {NoteId} = await params;
    return (
        <>
            <p>{NoteId}</p>
        </>
    );
}
