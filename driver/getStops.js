import { stops } from '../models/index.js'

export default function getStops(socket) {

    stops.find({}, { _id: 0, name: 1, lati: 1, longi: 1 },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                return socket.emit("giveStops", docs);
            }
        })

};