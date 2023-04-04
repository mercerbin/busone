import { users } from '../models/index.js'

export default function checkUser(socket, id) {

    try {
        users.findById(id,
            function (err, docs) {
                if (err) {
                    return socket.emit('user.check.error', {
                        message: 'error'
                    });
                }
                else {
                    return socket.emit('user.check.success', {
                        profile: docs,
                        _id: id
                    });
                }
            });
    } catch (error) {
        console.log("Error checking users", error);
    }

};