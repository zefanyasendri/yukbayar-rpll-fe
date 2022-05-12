export default class LoginDataService {
    constructor() {
        this.KEY = "LOGIN";
    }

    getCurrentUserLoginData() {
        return JSON.parse(localStorage.getItem(this.KEY)) || [];
    }

    addToCart(item) {
        const currentCart = JSON.parse(localStorage.getItem(this.KEY)) || [];
        for (let i = 0; i < currentCart.length; i++) {
            if (currentCart[i].id === item.id) return;
        }

        currentCart.push(item);
        localStorage.setItem(this.KEY, JSON.stringify(currentCart));
    }

    removeFromCart() {
        localStorage.removeItem(this.KEY)
    }
}