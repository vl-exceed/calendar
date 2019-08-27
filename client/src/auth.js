class Auth {                      // class for connection with passport js and express expressions :)
    constructor() {
      this.authenticated = false; // just template
    }
  
    login(cb) {
      this.authenticated = true;
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();
  