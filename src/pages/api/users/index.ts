import { NextApiRequest, NextApiResponse } from "next";

export default function usersHandler(req: NextApiRequest, res: NextApiResponse) {
  const usersData ={
    data: [
      { "id": 1, "name": "Pablo", "email": "pablo@gmail.com", "password": "12345" },
      { "id": 2, "name": "John", "email": "johndoe@gmail.com", "password": "12345" },
    ]
  } 
  if (req.method === "POST") {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = {
      id: Math.random() * 2,
      name: name,
      email,
      password: password
    }
    usersData.data.push(newUser)
    return res.status(201).json({message: `Usuário ${name} criado.`})
    
  }
  return res.status(200).json(usersData)
}