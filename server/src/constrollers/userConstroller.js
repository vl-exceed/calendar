import User from './src/models/userModel';

class userController {

    createUser() {
        const data = req.body
        const user = new User({
            id: data.id,
            username: data.username,
            password: data.password, 
            email: data.password
        })

        user.save()
            .then(() => {console.log('user added')})
            .then(() => {console.log('add error')})
    }

    updateUserData() {

    }
}

export default userController;