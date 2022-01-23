import type { NextPage } from "next"
import Link from "next/link"

const PostB: NextPage = () => {
  return (
    <div>
      <h1>B</h1>
      <Link href="/posts/c" locale="nl-nl" passHref>
        <a>to C</a>
      </Link>
    </div>
  )
}

export default PostB
