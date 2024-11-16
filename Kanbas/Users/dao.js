import db from "../Database/index.js";

let { users } = db;
export const createUser = (user) => {
    const newUser = { ...user, _id: Date.now() };
    users = [...users, newUser];
    return newUser;
};

export const findAllUsers = () => users;
export const findUserById = (userId) => users.find((user) => user._id === userId);
export const findUserByUsername = (username) => users.find((user) => user.username === username);
export const findUserByCredentials = (username, password)=> {
  console.log(username+ "TESTING findUserByCredentials username");
  users.find( (user) => user.username === username && user.password === password );
  console.log(username+ "TESTING findUserByCredentials username after");
  console.log(user.username+ "TESTING findUserByCredentials username");
}
export const updateUser = (userId, user) => (users = users.map((u) => (u._id === userId ? user : u)));
export const deleteUser = (userId) => (users = users.filter((u) => u._id !== userId));