import type { NextPage } from "next"
import Link from "next/link"

const PostC: NextPage = () => {
  return (
    <div>
      <h1>C</h1>
      <Link href="/posts/a" passHref>
        <a>to A</a>
      </Link>
    </div>
  )
}

export default PostC
