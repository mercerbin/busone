import { reals } from '../models/index.js'

export default function getBus(socket, data) {
  reals.find({}, { _id: 0, name: 1, color: 1, lat: 1, long: 1 },
    function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        socket.emit("updates", docs)
      }
    })

};