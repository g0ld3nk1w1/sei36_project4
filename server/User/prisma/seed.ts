import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

//Seed the User
async function main() {
    const seed1 = await prisma.user.upsert({
      where: {username: "Lcruz"},
      update: {},
      create: {
            firstname: "Leilani",
            lastname: "Cruz",
            password: "abc123",
            username: "Lcruz",
            role: Role.ADMIN,
        },
    })

    const seed2 = await prisma.user.upsert({
        where: {username: "callulas"},
        update: {email: "kathlyn.cummerata@gmail.com"},
        create: {
            firstname: "Callum",
            lastname: "Douglas",
            email: "kathlyn.cummerata@gmail.com",
            username: "callulas",
            password: "8844bc10",
            role: [Role.ADMIN, Role.INSTRUCTOR],
        },
    })
    const seed3 = await prisma.user.upsert({
      where: {username: "saraher"},
      update: {},
      create: {
          firstname: "Sarah",
          lastname: "Baker",
          email: "eleanor69@hotmail.co.uk",
          username: "saraher",
          password: "afafc8f3",
          role: Role.CONSUMER,
      },
  })
    console.log(seed1, seed2,seed3);
}


main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
