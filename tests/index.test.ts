import { validateVAT } from '../src/index';

describe('testing index file', () => {
  test('empty string should result in false', async () => {
    let _result = await validateVAT('', '');
    await expect(_result).toBe(false);
  });

  test('VAT 200 should result in false', async () => {
    let _result = await validateVAT('200', 'IT');
    await expect(_result).toBe(false);
  });

  test('VAT custom should result in true', async () => {
    let _result = await validateVAT('20792757270', 'FR');
    await expect(_result).toBe(true);
  });
});