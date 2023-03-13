import { noteResolver } from "./note";
import { userResolver } from "./user";

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...noteResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...noteResolver.Mutation,
  },
};
