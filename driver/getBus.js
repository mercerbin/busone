import { reals } from '../models/index.js'

export default function getBus(socket, data) {
    reals.find({ nroute: { $all: [data.source, data.destination] } }, { _id: 0, name: 1, nroute: 1 },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                docs.forEach(element => {
                    var nroute = element.nroute;
                    if (nroute.indexOf(data.source) < nroute.indexOf(data.destination)) {
                        return socket.emit("givebus", docs);
                    }
                });
            }
        })

};