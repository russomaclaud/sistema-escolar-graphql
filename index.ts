import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';

import conectarDB from './db/db';
import { typeDefs } from './graphql/types';
import { resolvers } from './graphql/resolvers';

dotenv.config();

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});

const app = express();

app.use(express.json());
app.use(cors());

app.listen({ port: process.env.PORT || 3001 }, async () => {
    await conectarDB();

    await server.start();

    server.applyMiddleware({ app });

    console.log(`Apollo Server running... in: ${process.env.PORT}`);
});
