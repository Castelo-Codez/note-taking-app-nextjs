import {NextRequest, NextResponse} from "next/server";
import {geistMono} from "./app/assets/fonts/fonts";

export async function middleware(req: NextRequest) {
    let reqCookie = req.cookies.get("n-t-a-f");
    if (reqCookie) {
        return NextResponse.next();
    }
    let resp = new NextResponse();
    resp.cookies.set("n-t-a-f", geistMono.className, {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 2,
    });
    return resp;
}

export const config = {
    matcher: "/:path*",
};
