import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export async function verifyToken(token: string): Promise<{ id: string; username: string }> {
    const secret: string = process.env.JWT_SECRET || '';
    const decoded = jwt.verify(token, secret) as { id: string; username: string };
    return decoded;
}