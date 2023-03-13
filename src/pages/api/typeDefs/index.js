import { gql } from "apollo-server-micro";
export const typeDefs = gql`
  scalar DateTime
  scalar Date

  input userInput {
    name: String!
    email: String!
    password: String!
  }

  type User {
    id: ID
    name: String
    email: String
  }

  type Note {
    id: ID!
    user: User
    title: String!
    content: String!
    attachments: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Task {
    id: ID!
    user: User
    title: String!
    description: String!
    dueDate: Date!
    completed: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    author: User!
    assignee: User
  }

  type Goal {
    id: ID!
    user: User
    title: String!
    description: String!
    dueDate: Date!
    completed: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    author: User!
  }

  type Reminder {
    id: ID!
    user: User
    title: String!
    description: String!
    datetime: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    author: User!
  }

  type Query {
    getUser(id: ID): User
    getUsers: [User]

    notes(id: ID!): [Note]
    goals(id: ID!): [Goal]
    tasks(id: ID!): [Task]
    reminder(id: ID!): [Reminder]
  }

  type Mutation {
    createUser(input: userInput): User

    # Tasks mutation
    createTask(title: String!, description: String!, dueDate: Date!): Task!
    updateTask(
      id: ID!
      title: String
      description: String
      dueDate: Date
      completed: Boolean
    ): Task!
    deleteTask(id: ID!): Boolean!

    # Reminder mutation
    createReminder(
      title: String!
      description: String!
      datetime: DateTime!
    ): Reminder!
    updateReminder(
      id: ID!
      title: String
      description: String
      datetime: DateTime
    ): Reminder!
    deleteReminder(id: ID!): Boolean!

    # Notes mutation
    createNote(title: String!, content: String!): Note!
    updateNote(id: ID!, title: String, content: String): Note!
    deleteNote(id: ID!): Boolean!

    # Goals mutation
    createGoal(title: String!, description: String!, dueDate: Date!): Goal!
    updateGoal(
      id: ID!
      title: String
      description: String
      dueDate: Date
      completed: Boolean
    ): Goal!
    deleteGoal(id: ID!): Boolean!
  }

  type Subscription {
    newUser: User!
  }
`;
