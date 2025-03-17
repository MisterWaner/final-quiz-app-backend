import { User } from "../../domain/User";
import { UserRepository } from "../../application/user.repository";
import { hashPassword } from "../../lib/password-hasher";
import { comparePassword } from "../../lib/password-compare";
import { generateNanoid } from "../../lib/id-generator";
import { db } from "../database/sqlite";
import { verifyToken } from "../../lib/token-verify";

export class UserService implements UserRepository {
    async createAccount(username: string, password: string): Promise<void> {
        const id = await generateNanoid();
        const hashedPassword = await hashPassword(password);

        db.prepare('INSERT INTO users (id, username, password) VALUES (?, ?, ?)').run(id, username, hashedPassword);
    }

    async getUser(id: string): Promise<User | null> {
        const user = db.prepare('SELECT * FROM users WHERE id = ?').get(id) as User;
        return user;
    }

    async getUserByUsername(username: string): Promise<User | null> {
        const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username) as User;
        return user;
    }

    async getUserByToken(token: string): Promise<User | null> {
        const { id } = await verifyToken(token);
        const user = this.getUser(id)

        return user;
    }

    async getUsers(): Promise<User[]> {
        const users = db.prepare('SELECT * FROM users').all() as User[];
        return users;
    }

    async updateUsername(id: string, username: string): Promise<void> {
        const user = this.getUser(id);
        if (!user) {
            throw new Error('User not found');
        }

        db.prepare('UPDATE users SET username = ? WHERE id = ?').run(username, id);
    }

    async updatePassword(id: string, password: string): Promise<void> {
        const user = this.getUser(id);
        if (!user) {
            throw new Error('User not found');
        }
        const hashedPassword = await hashPassword(password);

        db.prepare('UPDATE users SET password = ? WHERE id = ?').run(hashedPassword, id);
    }

    async deleteAccount(id: string): Promise<void> {
        const user = this.getUser(id);
        if (!user) {
            throw new Error('User not found');
        }

        db.prepare('DELETE FROM users WHERE id = ?').run(id);
    }

    async login(username: string, password: string): Promise<User> {
        const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username) as User;
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordCorrect = await comparePassword(password, user.password);
        if (!isPasswordCorrect) {
            throw new Error('Incorrect credentials');
        }

        return user;
    }
}