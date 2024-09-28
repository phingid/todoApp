class HTTP {
    constructor() {
        this.apiURL = 'http://localhost:3000/';
    }

    async get(url) {
        const responce = await fetch(`${this.apiURL}${url}`).then(responce => responce.json());
        return responce;
    }

    async post(url, params) {
        await fetch(`${this.apiURL}${url}`, {
            method: "POST",
            body: JSON.stringify(params),
        }).then(responce => responce.json());
    }
}

export default HTTP;