export const goalResolver = {
  Query: {
    goal: async (parent, { id }, { Goal, context }) => {
      const { userId } = context;
      const goal = await Goal.find({ user: id });
      return goal;
    },
  },
  Mutation: {
    createGoal: async (parent, { input }, { Goal, context }) => {
      // Get the authenticated user's id from the context
      const { userId } = context;

      // Create a new note object with the user id
      const goal = new Goal({
        ...input,
        userId: userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // Save the note to the notes collection
      await goal.save();

      return goal;
    },
  },
};
