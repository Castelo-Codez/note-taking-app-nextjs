import {NextRequest, NextResponse} from "next/server";
import {getSessionCookie} from "better-auth/cookies";
import {geistMono} from "./app/assets/fonts/fonts";

export default async function middleware(request: NextRequest) {
    const requestPath = request.nextUrl;
    const cookieName = "n_t_a_f";
    const expireAt = {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 2,
    };
    const sessionCookie = getSessionCookie(request);
    const fontCookie = request.cookies.get(cookieName);
    if (!sessionCookie) {
        if (!fontCookie) {
            const resp = NextResponse.redirect(
                new URL("http://localhost:3000/auth", request.nextUrl)
            );
            resp.cookies.set(cookieName, geistMono.className, expireAt);
            return resp;
        }
        const resp = NextResponse.redirect(
            new URL("http://localhost:3000/auth", request.nextUrl)
        );
        return resp;
    }
    if (!fontCookie) {
        return NextResponse.next().cookies.set(
            cookieName,
            geistMono.className,
            expireAt
        );
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|auth).*)"],
};
