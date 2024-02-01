import { NextRequest, NextResponse } from "next/server";

// export const config = {
//   matcher: ["/home"],
// };

export function middleware(req: NextRequest) {
  // const authToken = req.cookies.get("bestodds-token")?.value;

  if (req.nextUrl.pathname === "/") {
    req.nextUrl.pathname = "/blog";
    return NextResponse.redirect(req.nextUrl);
  }
  // // console.log(authToken);
  // if (req.nextUrl?.pathname === "/") {
  //   if (authToken) {
  //     req.nextUrl.pathname = "/home";
  //     return NextResponse.redirect(req.nextUrl);
  //   } else {
  //     req.nextUrl.pathname = "/auth/login";
  //     return NextResponse.redirect(req.nextUrl);
  //   }
  // }
  // if (req.nextUrl?.pathname === "/auth/:path*") {
  //   if (authToken) {
  //     req.nextUrl.pathname = "/home";
  //     return NextResponse.redirect(req.nextUrl);
  //   }
  // }
  // if (req.nextUrl.pathname !== "/auth/:path*") {
  //   if (!authToken) {
  //     req.nextUrl.pathname = "/auth/login";
  //     return NextResponse.redirect(req.nextUrl);
  //   } else {
  //     return NextResponse.next();
  //   }
  // }
  return NextResponse.next();
}
