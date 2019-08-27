import User from '../../models/userModel';

class userController {

    createUser(req, res) {
        const data = req.body
        const user = new User({
            email: data.email,
            login: data.login, 
            password: data.password
        })

        user.save()
            .then(() => {
                console.log('user cuccessfully added')
                res.status(200).send('true')
            })
            .catch(error => {
                console.log('error', error)
                res.status(401).send('false')
            })
    }
}

export default userController;