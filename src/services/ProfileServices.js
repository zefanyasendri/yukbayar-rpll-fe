export default class ProfileServices {
    hidePassword(value) {
        let val = value
        return val.replace(/./g, '*');
    }
}