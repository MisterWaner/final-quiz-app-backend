import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { User } from '../domain/User';

config();

export async function generateToken(user: User): Promise<string> {
    const maxAge: number = 3600; // 1 hour
    const secret: string = process.env.JWT_SECRET || '';
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
        },
        secret,
        {
            expiresIn: maxAge,
        }
    );

    return token;
}
