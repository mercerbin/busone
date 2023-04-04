import { drivers } from "../models/index.js";

const getDriver = (socket) => {

  drivers.find({}, { _id: 1, name: 1, email: 1, password: 1, bname: 1, auth: 1, color: 1, rname: 1 },
    function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        return socket.emit("setDrivers", docs);
      }
    })

};

export default getDriver