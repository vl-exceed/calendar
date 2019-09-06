import config from './clientConfig'

class Auth {
    constructor() {
      this.authenticated = true; //sfdafsdfasf
    }
  
    register(email, login, password) {
      return fetch(`${config.clientPath}${config.api.register}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email : email,
              login : login,
              password: password
          })
      })
        .then(response => response.json())
    }

    login(login, password) {
      return fetch(`${config.clientPath}${config.api.auth.login}`, {
        method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              login : login,
              password: password
          })
      })
      .then(response => response.json())
    }

    logout(cb) {
      // this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }

    log() {
      this.authenticated = true
    }

    getEvents() {
      
    }
  }
  
  const auth = new Auth();

  export default auth;
  