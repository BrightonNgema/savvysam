export const taskResolver = {
  Query: {
    tasks: async (parent, { id }, { Task, context }) => {
      const { userId } = context;
      const tasks = await Task.find({ user: id });
      return tasks;
    },
  },
  Mutation: {
    createTask: async (parent, { input }, { Task, context }) => {
      // Get the authenticated user's id from the context
      const { userId } = context;

      // Create a new note object with the user id
      const task = new Task({
        ...input,
        userId: userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // Save the note to the notes collection
      await task.save();

      return task;
    },
    updateTask: async (parent, { id, input }, { Task, context }) => {
      const { userId } = context;

      // Query the tasks collection for the task to update
      const task = await Task.findOne({ _id: id, userId });

      // Update the task properties
      task.title = input.title || task.title;
      task.description = input.description || task.description;
      task.dueDate = input.dueDate || task.dueDate;
      task.completed =
        input.completed !== undefined ? input.completed : task.completed;
      task.updatedAt = new Date();

      // Save the updated task to the tasks collection
      await task.save();

      return task;
    },
  },
};
