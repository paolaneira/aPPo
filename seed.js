const { User, City, Style } = require("./server/db/models");
const db = require("./server/db/db");
const { green, red } = require("chalk");

const seed = async () => {
  await db.sync({ force: true, logging: false });

  // seed your database here!
  const users = await Promise.all([
    User.create({
      firstName: "James",
      lastName: "Stephens",
      email: "brrp@brrp.com",
      password: "123",
      id: 1
    }),
    User.create({
      firstName: "Loren",
      lastName: "Mariquit",
      email: "loren@loren.com",
      password: "123",
      phone: "1234567890",
      id: 2
    }),
    User.create({
      firstName: "Tyler",
      lastName: "Swartz",
      email: "tyler@tyler.com",
      password: "123",
      phone: "1234567890",
      id: 3
    }),
    User.create({
      firstName: "Augustine",
      lastName: "McPharlain",
      email: "amcpharlain0@skype.com",
      password: "MSxwZlJCF",
      phone: "1234567890",
      id: 4
    }),
    User.create({
      firstName: "Sibilla",
      lastName: "Bream",
      email: "sbream1@wufoo.com",
      password: "S1sgs0WQ",
      phone: "1234567890",
      id: 5
    }),
    User.create({
      firstName: "Cacilie",
      lastName: "Wooffinden",
      email: "cwooffinden2@hexun.com",
      password: "zndRTR",
      phone: "1234567890",
      id: 6
    }),
    User.create({
      firstName: "Odette",
      lastName: "Le Gallo",
      email: "olegallo3@cbc.ca",
      password: "fEYpQz9yHUV",
      id: 7
    }),
    User.create({
      firstName: "Lamond",
      lastName: "Bearfoot",
      email: "lbearfoot4@google.es",
      password: "yUeoAajvjByP",
      id: 8
    }),
    User.create({
      firstName: "Cordie",
      lastName: "Gaines",
      email: "cgaines5@vkontakte.ru",
      password: "htiW1R9",
      id: 9
    }),
    User.create({
      firstName: "Angil",
      lastName: "Beauchamp",
      email: "abeauchamp6@list-manage.com",
      password: "By2shKJ",
      id: 10
    }),
    User.create({
      firstName: "Lyssa",
      lastName: "Prujean",
      email: "lprujean7@wsj.com",
      password: "iswLowGIhQMt",
      id: 11
    }),
    User.create({
      firstName: "Jaine",
      lastName: "Tatnell",
      email: "jtatnell8@usatoday.com",
      password: "AdrkLvCQ7Ml",
      id: 12
    }),
    User.create({
      firstName: "Kelli",
      lastName: "Domegan",
      email: "kdomegan9@homestead.com",
      password: "puL1ofuYO",
      id: 13
    })
  ]);

  // const styles = await Promise.all([
  //   Style.bulkCreate([
  //     {
  //       darkMode: true,
  //       primary: "#70fd56",
  //       userId: 1
  //     },
  //     {
  //       darkMode: false,
  //       primary: "#31edae",
  //       userId: 2
  //     },
  //     {
  //       darkMode: false,
  //       primary: "#10d645",
  //       userId: 3
  //     },
  //     {
  //       darkMode: true,
  //       primary: "#47be5e",
  //       userId: 4
  //     },
  //     {
  //       darkMode: false,
  //       primary: "#8e96e1",
  //       userId: 5
  //     },
  //     {
  //       darkMode: false,
  //       primary: "#0ea26f",
  //       userId: 6
  //     },
  //     {
  //       darkMode: true,
  //       primary: "#aaaed0",
  //       userId: 7
  //     },
  //     {
  //       darkMode: false,
  //       primary: "#1848f7",
  //       userId: 8
  //     },
  //     {
  //       darkMode: false,
  //       primary: "#c72dc1",
  //       userId: 9
  //     },
  //     {
  //       darkMode: false,
  //       primary: "#ddd945",
  //       userId: 10
  //     },
  //     {
  //       darkMode: false,
  //       primary: "#82665f",
  //       userId: 11
  //     },
  //     {
  //       darkMode: false,
  //       primary: "#1017d4",
  //       userId: 12
  //     },
  //     {
  //       darkMode: false,
  //       primary: "#2e1932",
  //       userId: 13
  //     }
  //   ])
  // ]);

  const cities = await Promise.all([
    City.create({
      name: "Bogota",
      countryName: "Colombia",
      id: 1
    }),
    City.create({
      name: "Paris",
      countryName: "France",
      id: 2
    }),
    City.create({
      name: "Rome",
      countryName: "Italy",
      id: 3
    })
  ]);

  console.log(
    green(`
      Seeding success!
    `)
  );
  db.close();
};

seed().catch(err => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});
