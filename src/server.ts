import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify();

app.listen(
    {
        port: 3001,
    },
    () => console.log('Server is running on port 3001'),
);