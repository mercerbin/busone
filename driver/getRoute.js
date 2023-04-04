import { routes } from '../models/index.js'

export default function getRoute(socket, data) {
    routes.find({ name: data.name }, { _id: 0, route: 1 },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                return socket.emit("giveRoute", docs);
            }
        })

};