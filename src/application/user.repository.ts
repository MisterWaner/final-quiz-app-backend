import { User } from "../domain/User";

export interface UserRepository {
    createAccount(username: string, password: string): Promise<void>;
    getUser(id: string): Promise<User | null>;
    getUsers(): Promise<User[]>;
    updateUsername(id: string, username: string): Promise<void>;
    updatePassword(id: string, password: string): Promise<void>;
    deleteAccount(id: string): Promise<void>;
    login(username: string, password: string): Promise<User>;
}
