import { NextApiRequest, NextApiResponse } from "next";

export default function usersHandler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    data: [
      {"id": 1, "name": "Pablo", "email": "pablo@gmail.com", "password": "12345"},
      {"id": 2, "name": "John", "email": "johndoe@gmail.com", "password": "12345"},
    ]
  })
}