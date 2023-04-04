import crypto from 'crypto'
import getUser from './getUser.js';
import { users } from '../models/index.js';

export default function loginUser(socket, user) {

    // var token = crypto.randomBytes(64).toString('base64');
    try {
        users.findByIdAndUpdate(user._id,
            function (err, docs) {
                if (err) {
                    //Make a function to send error message to android console.log(err)
                }
            });

        return getUser(socket, user._id);
    } catch (error) {
        console.log("Error while logging in", error);
    }

}