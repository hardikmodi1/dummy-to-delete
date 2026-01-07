import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.redirect(
    302,
    "https://forms-qa6.sprinklr.com/guided-workflows/6878edbc4fb9677ecf60d15e?gwId=800923"
  );
}
