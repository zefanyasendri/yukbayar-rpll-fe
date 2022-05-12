export default class TokenDataService {
    constructor() {
        this.KEY = "TOKEN_ID";
    }

    getCurrentTokenId() {
        return JSON.parse(localStorage.getItem(this.KEY)) || "";
    }

    addToTokenId(tokenId) {
        const currentTokenId = JSON.parse(localStorage.getItem(this.KEY)) || [];

        currentTokenId.push(tokenId);
        localStorage.setItem(this.KEY, JSON.stringify(currentTokenId[0]));
    }

    removeTokenId() {
        localStorage.removeItem(this.KEY)
    }
}