import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyCookie from "@fastify/cookie";
//import fastifyEnv from "@fastify/env";
import fastifyJwt from "@fastify/jwt";
import { config } from "dotenv";

config();

const secret = process.env.JWT_SECRET || '';

import { subjectRouter } from "./router/subject.router";
import { themeRouter } from "./router/theme.router";
import { userRouter } from "./router/user.router";
import { questionsRouter } from "./router/questions.router";

const fastify = Fastify({
    logger: true,
});

fastify.register(fastifyCookie);
fastify.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
});
fastify.register(fastifyJwt, {
    secret: secret,
});

fastify.get("/", (req, res) => {
    res.send("API démarrée et opérationnelle");
});
fastify.register(subjectRouter);
fastify.register(themeRouter);
fastify.register(userRouter);
fastify.register(questionsRouter);

export default fastify;