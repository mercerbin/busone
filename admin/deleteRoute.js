import { routes } from "../models/index.js";

const deleteRoute = (socket, data) => {
  routes.deleteOne({ "name": data.name }).then(function () {
    socket.emit("routeDeleted")
  }).catch(function (error) {
    console.log(error);
  });

};

export default deleteRoute