"use client";
import SignUp from "@/components/composd-components/SignUp";
import SignIn from "@/components/composd-components/SignIn";
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/authClient";
import {redirect} from "next/navigation";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function Auth() {
    return (
        <>
            <section className=" min-h-screen flex items-center justify-center px-4">
                <Tabs defaultValue="log in">
                    <TabsList className=" w-full">
                        <TabsTrigger value="log in" className=" cursor-pointer">
                            Log in
                        </TabsTrigger>
                        <TabsTrigger
                            value="register"
                            className=" cursor-pointer"
                        >
                            Register
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="log in">
                        <SignIn />
                    </TabsContent>
                    <TabsContent value="register">
                        <SignUp />
                    </TabsContent>
                </Tabs>
            </section>
        </>
    );
}
