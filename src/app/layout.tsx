import type {Metadata} from "next";
import "./globals.css";
import {cookies} from "next/headers";
import {geistMono, geistSans} from "./assets/fonts/fonts";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {Toaster} from "@/components/ui/sonner";
export const metadata: Metadata = {
    title: {
        template: "%s | Note Taking App",
        default: "Note Taking app",
    },
    description: "Note Taking App | Front End Mentor Projects",
};
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let fontCookie = (await cookies()).get("n_t_a_f");
    let value = fontCookie?.value;
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={` ${geistMono.className} ${geistSans.className} ${value} antialiased min-h-screen`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}
