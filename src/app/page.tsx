"use client";

import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/authClient";
import {redirect} from "next/navigation";

export default function Home() {
    return (
        <>
            <h1>hello from js file</h1>
            <Button
                className=" cursor-pointer"
                onClick={async () => {
                    await authClient.signOut({
                        fetchOptions: {
                            onSuccess: () => {
                                redirect("/auth");
                            },
                        },
                    });
                }}
            >
                log out
            </Button>
        </>
    );
}
