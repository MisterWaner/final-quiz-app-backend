import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { fastifyCookie } from '@fastify/cookie';
import fastifyEnv from '@fastify/env';
import { fastifySession } from '@fastify/session';
//import { config } from "dotenv";

//config();

import { subjectRouter } from './router/subject.router';
import { themeRouter } from './router/theme.router';
import { userRouter } from './router/user.router';
import { questionsRouter } from './router/questions.router';
import { User } from './domain/User';

const fastify = Fastify({
    logger: true,
});

const schema = {
    type: 'object',
    required: ['SESSION_SECRET'],
    properties: {
        SESSION_SECRET: { type: 'string' },
    },
};

const options = {
    schema,
    dotenv: true,
    confKey: 'config',
    data: process.env,
};

fastify.register(fastifyCookie);
fastify.register(fastifyCors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});
fastify.register(fastifyEnv, options).ready((error) => {
    if (error) {
        console.log(error);
    }
});

declare module 'fastify' {
    interface Session {
        user: {
            id: string;
            username: string;
        };
    }
}
fastify.register(fastifySession, {
    cookieName: 'sessionId',
    secret: process.env.SESSION_SECRET as string,
    cookie:  {
        maxAge: 3600 * 60, // 1 hour,
        secure: false,
        sameSite: 'none',
    }
});

fastify.get('/', (req, res) => {
    res.send('API démarrée et opérationnelle');
});
fastify.register(subjectRouter);
fastify.register(themeRouter);
fastify.register(userRouter, {prefix: '/users'});
fastify.register(questionsRouter);

export default fastify;
