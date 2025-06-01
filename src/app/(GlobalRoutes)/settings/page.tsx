"use client";
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";

export default function Settings() {
    const {setTheme} = useTheme();
    return (
        <>
            <p>settings</p>
            <Button onClick={() => setTheme("light")}>light</Button>
            <Button onClick={() => setTheme("dark")}>dark</Button>
            <Button onClick={() => setTheme("system")}>system</Button>
        </>
    );
}
