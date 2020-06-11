const bcrypt = require('bcryptjs');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt password', async () => {
    const user = await User.create({
      name: 'Izabela',
      email: 'izabela@teste.com',
      password: '123456789',
    });
    const compareHash = await bcrypt.compare('123456789', user.password_hash);
    expect(compareHash).toBe(true);
  });
});
