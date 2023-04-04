import { routes } from '../models/index.js'

export default function getRoute(socket, data) {
  routes.find({}, { _id: 0, name: 1 },
    function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        return socket.emit("isRoute", docs);
      }
    })

};