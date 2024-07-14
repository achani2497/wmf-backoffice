import { NextResponse } from "next/server";

export function middleware(request) {
  let user = {};
  //   if (typeof window !== undefined) {
  //     user = localStorage.getItem("user_credentials");
  //   }
  return user.token
    ? NextResponse.redirect(new URL("/login", request.url))
    : NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/login",
};
