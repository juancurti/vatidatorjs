import validateVAT from '../src/index.js';

describe('testing index file', () => {
  test('empty string should result in false', async () => {
    let _result = await validateVAT('');
    await expect(_result).toBe(false);
  });

  test('VAT 200 should result in false', async () => {
    let _result = await validateVAT('IT200');
    await expect(_result).toBe(false);
  });

  test('VAT custom should result in true', async () => {
    let _result = await validateVAT('FR20792757270');
    await expect(_result).toBe(true);
  });
});