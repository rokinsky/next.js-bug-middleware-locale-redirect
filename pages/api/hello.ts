import type { NextApiRequest, NextApiResponse } from "next"

type NextRefreshApiRequest = NextApiRequest & {
  query: {
    callback?: string
  }
}

type Data = {
  name: string
}

const handler = (
  req: NextRefreshApiRequest,
  res: NextApiResponse<Data>
) => {
  const callback = req.query.callback

  callback ? res.redirect(`${callback}?skip=1`) : res.status(200).json({ name: "John Doe" })
}

export default handler
