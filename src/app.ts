import Fastify from "fastify";
import fastifyCookie from "@fastify/cookie";

import { subjectRouter } from "./router/subject.router";
import { themeRouter } from "./router/theme.router";
import { userRouter } from "./router/user.router";
import { mathQuizRouter } from "./router/math.quiz.router";
import { geographyQuizRouter } from "./router/geography.quiz.router";

const fastify = Fastify({
    logger: true,
});
fastify.register(fastifyCookie);

fastify.get("/", (req, res) => {
    res.send("API démarrée et opérationnelle");
});
fastify.register(subjectRouter);
fastify.register(themeRouter);
fastify.register(userRouter);
fastify.register(mathQuizRouter);
fastify.register(geographyQuizRouter);

export default fastify;