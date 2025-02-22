import { User } from '../domain/types';

export interface UserRepository {
    createAccount(user: User): Promise<void>;
    getUser(id: string): Promise<User | null>;
    getUsers(): Promise<User[]>;
    updateUsername(id: string): Promise<void>;
    updatePassword(id: string): Promise<void>;
    deleteAccount(id: string): Promise<void>;
    login(): Promise<void>;
    logout(): Promise<void>;
}
