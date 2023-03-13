import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import mongoose from "mongoose";
import context from "./context";
import micro_cors from "micro-cors";

await mongoose.connect(process.env.NEXT_API_MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

console.log("{process.env.NEXT_API_MONGODB}", process.env.NEXT_API_MONGODB);
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB connected!");
});

const cors = micro_cors({
  origin: "*", // <- allow request from all domains
  credentials: true,
  allowMethods: ["PUT", "POST", "GET"],
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  cors: cors,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  uploads: {
    maxFileSize: 1000000000,
    maxFiles: 100,
  },
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
