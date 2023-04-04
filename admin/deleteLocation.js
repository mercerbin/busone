import { stops } from "../models/index.js";

const deleteLocation = (socket, data) => {

  stops.deleteOne({ "name": data.name }).then(function () {
    socket.emit("deleteSuccess")
  }).catch(function (error) {
    console.log(error);
  });

};

export default deleteLocation