import { stops } from "../models/index.js";

const addLocation = (socket, data) => {
  var stop = new stops(data);

  stops.findOne({ "name": data.name, "lati": data.lati, "longi": data.longi }, null, (err, data) => {
    if (data) {
      return socket.emit('addError', err || {
        message: "Place Already Exists"
      });
    } else {
      stop.save().then(function (data) {
        return socket.emit('addSuccess', {
          message: 'Added Successfully'
        });
      });
    }
  });

};

export default addLocation