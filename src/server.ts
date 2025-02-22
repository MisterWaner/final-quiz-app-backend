import fastify from "./app";
import { config } from "dotenv";

config();

const port = Number(process.env.PORT )|| 3001;

fastify.listen({ port }, function(err, address) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
})