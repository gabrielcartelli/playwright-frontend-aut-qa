const { test, expect } = require('@playwright/test');
const { HomePage } = require('../support/pages/home-page.js');

test.describe('busca Google', { tag: ['@regressao', '@smoke'] }, () => {
    test('realizar pesquisa no Google', { tag: '@smoke' }, async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.acessar();
        await homePage.preencherInput('CWI');
        await homePage.clicarPesquisar();
        await expect(homePage.txtCWI).toHaveText('CWI')
    });
});