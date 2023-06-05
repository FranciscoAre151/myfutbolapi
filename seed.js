const { Seeder } = require('mongo-seeding');

const config = {
    database: 'mongodb+srv://franare:Newstarsoccer12@cluster0.trmcpux.mongodb.net/myDatabase?retryWrites=true&w=majority',
    dropDatabase: false,
};

const seeder = new Seeder(config);

const path = require('path');

const dataPath = seeder.readCollectionsFromPath(path.resolve('./data-import'));

console.log(dataPath)

const main = async () => {
  try {
    await seeder.import(dataPath)
    console.log('Seed complete!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(0)
  }
}

main()