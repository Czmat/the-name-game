import faker from 'faker';
const users = [];

while (users.length < 50) {
  users.push({
    noun: faker.company.catchPhraseNoun(),
    adjective: faker.company.catchPhraseAdjective(),
  });
}

const data = { users };
export default data;
