import Fastify from "fastify";

const fastify = Fastify({
    logger: true,
});

fastify.get("/", (req, res) => {
    res.send("API démarrée et opérationnelle");
});

export default fastify;