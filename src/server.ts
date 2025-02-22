import fastify from "./app";
import { config } from "dotenv";
import { initDb } from "./infrastructure/database/sqlite";

config();

const port = Number(process.env.PORT )|| 3001;

fastify.listen({ port }, function(err, address) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
    initDb();
})