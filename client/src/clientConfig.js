const fullPath = 'https://localhost:'
const clientPath = 'http://localhost:3001/'
const port = 3001

const api = {
    register: 'api/register',
    login: 'api/login',
    home: 'api/client',
    events: 'api/calendar/events',
    auth : {
        login: 'api/auth/login',
        logout: 'api/auth/logout', 
        isLogged : 'api/auth/isLogged'
    }
}

const routes = {
    register: '/register',
    login: '/login',
    home: '/client'
}

module.exports = {
    fullPath : fullPath,
    clientPath : clientPath,
    port : port,
    api : api,
    routes : routes
}