export const people = [
  {
    id: "0",
    name: "Hyunjin",
    age: 23,
    gender: "female",
  },
  {
    id: "1",
    name: "Minhyun",
    age: 27,
    gender: "male",
  },
  {
    id: "2",
    name: "Mingi",
    age: 27,
    gender: "male",
  },
  {
    id: "3",
    name: "Aron",
    age: 29,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
