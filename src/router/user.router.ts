import { FastifyInstance } from 'fastify';
import { UserController } from '../infrastructure/user/user.controller';
import { UserService } from '../infrastructure/user/user.service';
import { User } from '../domain/User';

const userService = new UserService();
const userController = new UserController(userService);

export async function userRouter(fastify: FastifyInstance) {
    fastify.post<{ Body: User }>('/users', {}, userController.createAccount);
    fastify.get<{ Params: { id: string } }>(
        '/users/:id',
        {},
        userController.getUser
    );
    fastify.get<{ Reply: User[] }>('/users', {}, userController.getUsers);
    fastify.put<{ Params: { id: string }; Body: User }>(
        '/users/:id',
        {},
        userController.updateUsername
    );
    fastify.put<{ Params: { id: string }; Body: User }>(
        '/users/:id',
        {},
        userController.updatePassword
    );
    fastify.delete<{ Params: { id: string } }>(
        '/users/:id',
        {},
        userController.deleteAccount
    );
    fastify.post<{ Body: User }>('/login', {}, userController.login);
    fastify.post<{ Body: User }>('/logout', {}, userController.logout);
}
