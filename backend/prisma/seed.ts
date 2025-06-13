import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.character.deleteMany();
  await prisma.like.deleteMany();

  await prisma.user.create({
    data: {
      email: 'test@test.com',
      name: 'Test User',
      likes: {
        create: {
          character: {
            create: {
              name: 'Luke Skywalker',
              height: '172',
              mass: '77',
              hairColour: 'blond',
              skinColour: 'fair',
              eyeColour: 'blue',
              gender: 'male',
            },
          },
        },
      },
    },
  });

  await prisma.character.createMany({
    data: [
      {
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hairColour: 'n/a',
        skinColour: 'gold',
        eyeColour: 'yellow',
        gender: 'n/a',
      },
      {
        name: 'R2-D2',
        height: '96',
        mass: '32',
        hairColour: 'n/a',
        skinColour: 'white, blue',
        eyeColour: 'red',
        gender: 'n/a',
      },
      {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        hairColour: 'none',
        skinColour: 'white',
        eyeColour: 'yellow',
        gender: 'male',
      },
      {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        hairColour: 'brown',
        skinColour: 'light',
        eyeColour: 'brown',
        gender: 'female',
      },
      {
        name: 'Owen Lars',
        height: '178',
        mass: '120',
        hairColour: 'brown, grey',
        skinColour: 'light',
        eyeColour: 'blue',
        gender: 'male',
      },
      {
        name: 'Beru Whitesun lars',
        height: '165',
        mass: '75',
        hairColour: 'brown',
        skinColour: 'light',
        eyeColour: 'blue',
        gender: 'female',
      },
      {
        name: 'R5-D4',
        height: '97',
        mass: '32',
        hairColour: 'n/a',
        skinColour: 'white, red',
        eyeColour: 'red',
        gender: 'n/a',
      },
      {
        name: 'Biggs Darklighter',
        height: '183',
        mass: '84',
        hairColour: 'black',
        skinColour: 'light',
        eyeColour: 'brown',
        gender: 'male',
      },
      {
        name: 'Obi-Wan Kenobi',
        height: '182',
        mass: '77',
        hairColour: 'auburn, white',
        skinColour: 'fair',
        eyeColour: 'blue-gray',
        gender: 'male',
      },
      {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        hairColour: 'blond',
        skinColour: 'fair',
        eyeColour: 'blue',
        gender: 'male',
      },
      {
        name: 'Wilhuff Tarkin',
        height: '180',
        mass: 'unknown',
        hairColour: 'auburn, grey',
        skinColour: 'fair',
        eyeColour: 'blue',
        gender: 'male',
      },
      {
        name: 'Chewbacca',
        height: '228',
        mass: '112',
        hairColour: 'brown',
        skinColour: 'unknown',
        eyeColour: 'blue',
        gender: 'male',
      },
      {
        name: 'Han Solo',
        height: '180',
        mass: '80',
        hairColour: 'brown',
        skinColour: 'fair',
        eyeColour: 'brown',
        gender: 'male',
      },
      {
        name: 'Greedo',
        height: '173',
        mass: '74',
        hairColour: 'n/a',
        skinColour: 'green',
        eyeColour: 'black',
        gender: 'male',
      },
      {
        name: 'Jabba Desilijic Tiure',
        height: '175',
        mass: '1,358',
        hairColour: 'n/a',
        skinColour: 'green-tan, brown',
        eyeColour: 'orange',
        gender: 'hermaphrodite',
      },
      {
        name: 'Wedge Antilles',
        height: '170',
        mass: '77',
        hairColour: 'brown',
        skinColour: 'fair',
        eyeColour: 'hazel',
        gender: 'male',
      },
      {
        name: 'Jek Tono Porkins',
        height: '180',
        mass: '110',
        hairColour: 'brown',
        skinColour: 'fair',
        eyeColour: 'blue',
        gender: 'male',
      },
      {
        name: 'Yoda',
        height: '66',
        mass: '17',
        hairColour: 'white',
        skinColour: 'green',
        eyeColour: 'brown',
        gender: 'male',
      },
      {
        name: 'Palpatine',
        height: '170',
        mass: '75',
        hairColour: 'grey',
        skinColour: 'pale',
        eyeColour: 'yellow',
        gender: 'male',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
