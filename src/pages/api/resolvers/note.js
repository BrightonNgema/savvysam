export const noteResolver = {
  Query: {
    notes: async (parent, { id }, { Note, context }) => {
      const { userId } = context;
      const notes = await Note.find({ user: id }).populate("user");
      return notes;
    },
  },
  Mutation: {
    createNote: async (parent, args, { Note, context }) => {
      const { userId } = context;
      const note = await new Note({
        ...args,
        user: "640e295e628097c9a026f884",
        createdAt: new Date(),
        updatedAt: new Date(),
      }).save();
      return note.populate("user");
    },
  },
};
