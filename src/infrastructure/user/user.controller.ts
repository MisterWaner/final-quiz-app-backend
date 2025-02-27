import { FastifyRequest, FastifyReply } from 'fastify';
import { User } from '../../domain/User';
import { UserService } from './user.service';
import { hashPassword } from '../../lib/password-hasher';
import { generateToken } from '../../lib/token-generator';


export class UserController {
    constructor(private readonly userService: UserService) {}

    createAccount = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const { username, password } = request.body as User;
            let confirmation: string = request.body as string;

            if (!username || !password || !confirmation) {
                reply
                    .status(400)
                    .send('Username, password and confirmation are required');
                return;
            }

            if (password !== confirmation) {
                reply
                    .status(400)
                    .send('Password and confirmation do not match');
                return;
            }

            await this.userService.createAccount(username, password);
            reply.status(201).send('Account created successfully');
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    getUser = async (
        request: FastifyRequest<{ Params: { id: string } }>,
        reply: FastifyReply
    ) => {
        try {
            const { id } = request.params;
            const user = await this.userService.getUser(id);
            if (!user) {
                reply.status(404).send('User not found');
                return;
            }
            reply.status(200).send(user);
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    getUsers = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const users = await this.userService.getUsers();
            if (!users) {
                reply.status(404).send('Users not found');
            }
            reply.status(200).send(users);
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    updateUsername = async (
        request: FastifyRequest<{ Params: { id: string } }>,
        reply: FastifyReply
    ) => {
        try {
            const { id } = request.params;
            const { username } = request.body as User;
            const user = await this.userService.getUser(id);

            if (!user) {
                reply.status(404).send('User not found');
                return;
            }

            await this.userService.updateUsername(id, username);
            reply.status(200).send('Username updated successfully');
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    updatePassword = async (
        request: FastifyRequest<{ Params: { id: string } }>,
        reply: FastifyReply
    ) => {
        try {
            const { id } = request.params;
            const { password } = request.body as User;

            if (!password) {
                reply.status(400).send('Password is required');
                return;
            }
            const user = await this.userService.getUser(id);
            if (!user) {
                reply.status(404).send('User not found');
                return;
            }

            const hashedPassword = await hashPassword(password);
            await this.userService.updatePassword(id, hashedPassword);
            reply.status(200).send('Password updated successfully');
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    deleteAccount = async (
        request: FastifyRequest<{ Params: { id: string } }>,
        reply: FastifyReply
    ) => {
        try {
            const { id } = request.params;
            const user = await this.userService.getUser(id);
            if (!user) {
                reply.status(404).send('User not found');
                return;
            }
            await this.userService.deleteAccount(id);
            reply.status(200).send('Account deleted successfully');
        } catch (error) {
            reply.status(500).send(error);
        }
    };

    login = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const { username, password } = request.body as User;

            if (!username || !password) {
                reply.status(400).send('Username and password are required');
                return;
            }

            const user = await this.userService.login(username, password);

            if (!user) {
                reply.status(401).send('Incorrect username or password');
                return;
            }



        } catch (error) {
            reply.status(500).send(error);
        }
    };

    logout = async (request: FastifyRequest, reply: FastifyReply) => {};
}
