import Fastify from "fastify";

import { subjectRouter } from "./router/subject.router";

const fastify = Fastify({
    logger: true,
});

fastify.get("/", (req, res) => {
    res.send("API démarrée et opérationnelle");
});
fastify.register(subjectRouter);

export default fastify;