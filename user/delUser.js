import { reals } from '../models/index.js'

export default function delUser(socket, data) {

    try {
        reals.findByIdAndDelete(data._id, function (err, docs) {
            if (err) {
                console.log(err)
            }
        });
    } catch (error) {
        console.log("Error deleting users", error);
    }

}