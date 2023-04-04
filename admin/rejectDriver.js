import { drivers } from "../models/index.js";

const deleteLocation = (socket, data) => {
  drivers.deleteOne({ "email": data.email }).then(function () {
    socket.emit("deleteDriverSuccess", { message: "Deleted Successfully" })
  }).catch(function (error) {
    console.log(error);
  });

};

export default deleteLocation