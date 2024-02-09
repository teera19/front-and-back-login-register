const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const password = bcrypt.hashSync("123456");
const userData = [
  { username: "andy", password: password, email: "andy@gg.mail" },
  { username: "bobby", password: password, email: "bobby@gg.mail" },
  { username: "candy", password: password, email: "candy@gg.mail" },
];

const productData = [
  { title: "Learn HTML", price: 50,detail:"assa", userId: 1 },
  { title: "Learn CSS", price: 50,detail:"assa", userId: 1 },
  { title: "Learn JS", price: 50,detail:"assa", userId: 3 },
];

const run = async () => {
//   await prisma.todo.deleteMany({});
//   await prisma.user.deleteMany({});
  await prisma.user.createMany({
    data: userData,
  });
  await prisma.product.createMany({
    data: productData,
  });
};

run();
