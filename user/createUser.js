import md5 from 'md5';
import { users } from '../models/index.js'
import loginUser from './loginUser.js';

export default function createUser(socket, data) {

    data.password = md5(data.password);

    var user = new users(data);

    try {
        user.save().then(function (data) {
            return loginUser(socket, data);
        });
    } catch (error) {
        console.log("Error creating user", error);
    }

}