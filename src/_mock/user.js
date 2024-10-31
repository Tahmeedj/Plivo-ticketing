import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  company: sample([
    'Important Notice for Mahdi Dewan',
    'OPEN THIS EMAIL',
    'Office Hours',
    'Make An Appointment',
    'When Are You Available?',
    '[URGENT] You have ONE DAY to book a meeting…'
  ]),
  isVerified: faker.datatype.boolean(),
  status: sample(['Opened', 'Opened']),
  role: sample([
    'Financial Aid Office',
    'Professor',
    'Hunter Advisor',
    'Computer Science Department',
    'Full Stack Developer',
  ]),
}));

export default users;
