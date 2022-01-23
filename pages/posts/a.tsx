import type { NextPage } from "next"
import Link from "next/link"

const PostA: NextPage = () => {
  return (
    <div>
      <h1>A</h1>
      <Link href="/nl-nl/posts/b" locale={false} passHref>
        <a>to B</a>
      </Link>
    </div>
  )
}

export default PostA
