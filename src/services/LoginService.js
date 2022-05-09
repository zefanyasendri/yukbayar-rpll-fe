export default class LoginService {
  constructor() {
    this.KEY = "LOGIN";
  }

  getCurrentUserType() {
    return JSON.parse(localStorage.getItem(this.KEY)) || "";
  }

  addToUserType(userType) {
    const currentUserType = JSON.parse(localStorage.getItem(this.KEY)) || [];

    currentUserType.push(userType);
    localStorage.setItem(this.KEY, JSON.stringify(currentUserType[0]));
  }

  removeUserType() {
    localStorage.removeItem(this.KEY)
  }
}
