import { reals } from '../models/index.js';

const driverUpdates = (socket, data) => {
  try {
    reals.updateOne({ 'email': data.email }, { lat: data.lat, long: data.long, route: data.route, time: Date.now() },
      function (err, docs) {
        if (err) {
          socket.emit("deletes", docs);
        }
      });

  } catch (error) {
    console.log("Error while Inserting driver", error);
  }

}

export default driverUpdates