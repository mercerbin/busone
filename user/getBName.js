import { reals } from "../models";

export default function getBName(socket) {

    reals.find({}, { _id: 0, name: 1, troute: 1, nroute: 1, time: 1 },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                return socket.emit("givebname", docs);
            }
        })

};