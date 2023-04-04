import { routes } from "../models/index.js";

const getLocation = (socket) => {

  routes.find({}, { _id: 1, name: 1, route: 1 },
    function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        return socket.emit("setARoute", docs);
      }
    })

};

export default getLocation