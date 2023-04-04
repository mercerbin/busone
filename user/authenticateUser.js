import md5 from 'md5';
import { users } from '../models/index.js'
import loginUser from './loginUser.js';

export default function authenticateUser(socket, data) {

    data.password = md5(data.password);

    try {
        users.findOne(data, null, function (err, data) {

            if (data) {
                return loginUser(socket, data);
            } else {
                return socket.emit('user.login.error', err || {
                    message: 'Invalid email or password'
                });
            }
        });
    } catch (error) {
        console.log("Error while logging in", error)
    }

};