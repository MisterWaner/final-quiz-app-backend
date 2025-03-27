import { FastifyInstance } from 'fastify';
import { UserController } from '../infrastructure/user/user.controller';
import { UserService } from '../infrastructure/user/user.service';
import { User } from '../domain/User';

const userService = new UserService();
const userController = new UserController(userService);

export async function userRouter(fastify: FastifyInstance) {
    fastify.post<{ Body: { username: string; password: string }}>(
        '/registration',
        {},
        userController.createAccount
    );
    fastify.get<{ Params: { id: string } }>(
        '/:id',
        {},
        userController.getUser
    );
    fastify.get<{ Reply: User[] }>('/users', {}, userController.getUsers);
    fastify.put<{ Params: { id: string }; Body: User }>(
        '/:id/username',
        {},
        userController.updateUsername
    );
    fastify.put<{ Params: { id: string }; Body: User }>(
        '/:id/pwd',
        {},
        userController.updatePassword
    );
    fastify.delete<{ Params: { id: string } }>(
        '/:id',
        {},
        userController.deleteAccount
    );
    fastify.post<{ Body: User }>('/login', {}, userController.login);
    fastify.post<{ Body: User }>('/logout', {}, userController.logout);
}
