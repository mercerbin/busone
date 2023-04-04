import { stops } from "../models";

export default function getUStops(socket) {

    stops.find({}, { _id: 0, name: 1 },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                return socket.emit("giveustop", docs);
            }
        })

};