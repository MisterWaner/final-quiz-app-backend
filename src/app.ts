import Fastify from "fastify";

import { subjectRouter } from "./router/subject.router";
import { branchRouter } from "./router/branch.router";

const fastify = Fastify({
    logger: true,
});

fastify.get("/", (req, res) => {
    res.send("API démarrée et opérationnelle");
});
fastify.register(subjectRouter);
fastify.register(branchRouter);

export default fastify;