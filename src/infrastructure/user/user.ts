import { User } from "../../domain/types";
import { UserRepository } from "../../application/user.repository";

export class UserService implements UserRepository {
    createAccount(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getUser(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    getUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    updateUsername(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updatePassword(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteAccount(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    login(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    logout(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}