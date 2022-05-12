export default class TransactionServices {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    changeDateFormat(str){
        var temp = str.toString()
        var val1 = temp.substr(0,10)
        var val2 = temp.substr(11,8)
        return val1 + '\n' + val2
    }
    countPendapatan(arrayData){
        var total = 0
        for (let i = 0; i < arrayData.length; i++) {
            total += 2000;
        }
        return total
    }
    countByTopUp(arrayData){
        var total = 0
        for(var value in arrayData){
            total += value.nominal
        }
        return total
    }

    //PLN section
    constructor() {
        this.KEY = "PLN-TOKEN";
    }
    
    getCurrentTokenTransactionData() {
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