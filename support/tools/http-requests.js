const { expect } = require('@playwright/test');

exports.HTTPRequest = class HTTPRequest {
    /**
     * @param {import('@playwright/test').Request} request
     * @param {import('@playwright/test').TestInfo} testInfo
     */
    constructor(request, testInfo) {
        this.request = request;
        this.testInfo = testInfo;
    }

    async get(url, headers = {}) {
        let res = await this.request.get(url, { headers: headers })
        return this.processarResposta(res, 'GET', url);
    }

    async post(url, headers = {}, body = {}) {
        let res = await this.request.post(url, { headers: headers, data: body })
        return this.processarResposta(res, 'POST', url);
    }

    async patch(url, headers = {}, body = {}) {
        let res = await this.request.patch(url, { headers: headers, data: body })
        return this.processarResposta(res, 'PATCH', url);
    }

    async processarResposta(res, metodo, url) {
        if (!res.ok()) {
            console.log(`[ERRO] ${metodo} "${url} | ${res.status()} | ${this.testInfo.title} | ${await res.text()}"`)
        }

        let resJson
        try { resJson = await res.json(); } catch (error) { resJson = null; }

        return {
            status: res.status(),
            response: resJson,
        }
    }
};