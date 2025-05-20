import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    let {font} = await req.json();
    let resp = NextResponse.json({font});
    resp.cookies.set("n-t-a-f", font);
    return resp;
}
