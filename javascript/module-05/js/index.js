"use strict";

function SocialBook(users = [], posts = {}) {
  this.getAllUsers = function() {
    return users;
  };

  this.getUserByLogin = function(login) {
    const foundUserByLogin = users.find(x => x.login === login);
    return foundUserByLogin;
  };

  this.getUserStatus = function(userId) {
    const foundUserById = users.find(x => x.id === userId);
    return foundUserById.isActive ? "active" : "incactive";
  };

  this.addUser = function(user) {
    const newUser = users.map(user => ({
      ...user,
      id: getId(),
      isActive: false
    }));
  };

  this.removeUserById = function(userId) {
    const userForDelete = users.filter(x => x.id === userId);
  };

  this.getUsersCount = function() {
    let totalUsers = 0;
    const everyUser = users.filter(x => (totalUsers += 1));
    return totalUsers;
  };
}

const getId = () =>
  "-" +
  Math.random()
    .toString(36)
    .substr(2, 9);

const user = { email: "xleb@kolbasa.maslo", password: '1488228' };

const initialUsers = [
  {
    id: "-s19a6hqce",
    login: "mangozedog@mail.com",
    password: "qwe123zv",
    isActive: true
  },
  {
    id: "-qkpzenjxe",
    login: "polysweet@skynet.ze",
    password: "123zxc78",
    isActive: true
  },
  {
    id: "-e51cpd4di",
    login: "ajax2k@change.ua",
    password: "ert234qw",
    isActive: false
  }
];

const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ]
};

const socialBook = new SocialBook(initialUsers, initialPosts);

socialBook.addUser(user);

//socialBook.removeUserById("s19a6hqce");
