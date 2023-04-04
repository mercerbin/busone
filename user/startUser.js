import { reals } from '../models/index.js';
import loginUser from './loginUser.js';

export default function startUser(socket, data) {
    user_id = data._id
    try {
        reals.findByIdAndUpdate(user_id, { troute: data.troute, nroute: data.nroute, location: [data.location[0], data.location[1], data.location[2]], time: Date.now() },
            function (err, docs) {
                if (err) {
                    console.log(err)
                }
            });
    } catch (error) {
        console.log("Error while updating the driver", error);
    }

}