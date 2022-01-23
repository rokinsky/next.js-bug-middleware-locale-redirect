import type { NextMiddleware } from "next/server"
import { NextResponse } from "next/server"

export const middleware: NextMiddleware = (req, _ev) => {
  if (req.nextUrl.searchParams.get("skip")) {
    return NextResponse.next()
  }

  // req.nextUrl.pathname doesn't contain locale so a workaround is used here:
  const { pathname } = new URL(req.url)

  return NextResponse.redirect(`/api/hello?callback=${pathname}`)
}
