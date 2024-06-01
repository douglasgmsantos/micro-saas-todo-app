import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/get-url";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("authjs.session-token");
  const pathname = request.nextUrl.pathname;

  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL(getUrl("/app")));
  }

  if (pathname.includes("/app") && !token) {
    return NextResponse.redirect(new URL(getUrl("/auth")));
  }
}
