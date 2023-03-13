export const userResolver = {
  Query: {
    getUser: async (_root, { id }, { User }) => {
      return User.findOne({ _id: id });
    },
    getUsers: async (_root, _args, { User }) => {
      return User.find();
    },
  },
  Mutation: {
    createUser: async (_root, { input }, { User }) => {
      const newUser = await new User(input).save();
      return newUser;
    },
  },
};
