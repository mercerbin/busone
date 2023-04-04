import { stops } from "../models/index.js";

const getLocation = (socket) => {

  stops.find({}, { _id: 0, name: 1 },
    function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        return socket.emit("setLocations", docs);
      }
    })

};

export default getLocation