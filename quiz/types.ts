import { Request } from 'express';

// define relevant types here
interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}
  
interface UserRequest extends Request {
    users?: User[];
}

export { User, UserRequest }