import express, { Response, NextFunction } from 'express';
const router = express.Router();
import { User, UserRequest } from './types';


const port: number = 8000;

const dataFile = './data/users.json';

let users: User[];

router.get('/usernames', (req: UserRequest, res: Response) => {
  let usernames = req.users?.map((user) => {
    return { id: user.id, username: user.username };
  });
  res.send(usernames);
});

router.get("/username/:name", (req: UserRequest, res: Response) => {
  let name = req.params.name
  req.users?.forEach((user) => {
    if(user.username === name) {
      res.send(user.email)
    }
  })
  res.send({
    error: {message: `${name} not found`, status: 404}
  })
})

export default router