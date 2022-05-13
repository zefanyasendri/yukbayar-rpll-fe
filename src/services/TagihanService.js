export default class TagihanService {
    constructor() {
        this.KEY = "NO_METER";
    }

    getCurrentNoMeter() {
        return JSON.parse(localStorage.getItem(this.KEY)) || "";
    }

    addToNoMeter(noMeter) {
        const currentNoMeter = JSON.parse(localStorage.getItem(this.KEY)) || [];

        currentNoMeter.push(noMeter);
        localStorage.setItem(this.KEY, JSON.stringify(currentNoMeter[0]));
    }

    removeNoMeter() {
        localStorage.removeItem(this.KEY)
    }
}