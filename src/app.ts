import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyCookie from "@fastify/cookie";

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

fastify.get("/", (req, res) => {
    res.send("API démarrée et opérationnelle");
});
fastify.register(subjectRouter);
fastify.register(themeRouter);
fastify.register(userRouter);
fastify.register(questionsRouter);

export default fastify;