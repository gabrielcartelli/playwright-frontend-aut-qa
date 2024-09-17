exports.HomePage = class HomePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.inputPesquisar = page.getByLabel('Pesquisar', { exact: true });
        this.btnPesquisar = page.getByLabel('Pesquisa Google').first();
        this.txtCWI = page.locator('#rhs').getByRole('heading', { name: 'CWI' });
    }

    async acessar() {
        await this.page.goto('/');
    }

    async preencherInput(texto) {
        await this.inputPesquisar.click();
        await this.inputPesquisar.fill(texto);
    }

    async clicarPesquisar() {
        await this.btnPesquisar.click();
    }
};