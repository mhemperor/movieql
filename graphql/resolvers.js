const hyunjin = {
  name: "Hyunjin",
  age: 23,
  gender: "female",
};
const resolvers = {
  Query: {
    person: () => hyunjin,
  },
};
export default resolvers;
