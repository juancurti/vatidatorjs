import { validateVAT } from '../src/index';

describe('testing index file', () => {
  test('empty string should result in false', async () => {
    let _result = await validateVAT('');
    expect(_result).toBe(false);
  });
});