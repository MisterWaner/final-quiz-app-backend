import Fastify from "fastify";
import fastifyCookie from "@fastify/cookie";

import { subjectRouter } from "./router/subject.router";
import { themeRouter } from "./router/theme.router";

const fastify = Fastify({
    logger: true,
});
fastify.register(fastifyCookie, {
    algorithm: "SHA256",
    
});

fastify.get("/", (req, res) => {
    res.send("API démarrée et opérationnelle");
});
fastify.register(subjectRouter);
fastify.register(themeRouter);

export default fastify;