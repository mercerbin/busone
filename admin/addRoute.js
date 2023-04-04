import { routes } from "../models/index.js";

const addLocation = (socket, data) => {
  var route = new routes(data);

  routes.findOne({ "name": data.name }, null, (err, data) => {
    if (data) {
      return socket.emit('routeError', err || {
        message: "Please try another Name"
      });
    } else {
      route.save().then(function (data) {
        return socket.emit('routeAdded', {
          message: 'Added Successfully'
        });
      });
    }
  });

};

export default addLocation