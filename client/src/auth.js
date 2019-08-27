class Auth {                      // class for connection with passport js and express expressions :)
    constructor() {
      this.authenticated = false; // just template
    }
  
    register(mail, login, password) {
      return fetch('http://localhost:3001/api/register', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              mail : mail,
              login : login,
              password: password
          })
      })
          .then(response => response.json())
          // .then(data => {console.log(data)})
          // .catch(error => {console.log(error)})
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
  