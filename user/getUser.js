import { users } from '../models/index.js';

export default function getUser(socket, id) {

    try {
        users.findById(id,
            function (err, docs) {
                if (err) {
                    return socket.emit('user.get.error', {
                        message: 'error'
                    });
                }
                else {
                    return socket.emit('user.get.success', {
                        profile: docs,
                        _id: id
                    });
                }
            });
    } catch (error) {
        console.log("Error finding user", error);
    }

};