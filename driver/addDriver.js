import { reals } from '../models/index.js';

const addDriver = (socket, data) => {
  var real = reals(data);
  try {
    reals.findOne({ email: data.email }, { _id: 1, name: 1, lat: 1, long: 1, email: 1 }, (err, value) => {
      if (value) {
        socket.emit("driverAdded", value)
      }
      else {
        real.save()
          .then((err, value) => {
            reals.findOne({ email: data.email }, { _id: 1, name: 1, lat: 1, long: 1, email: 1 }, (err, innerData) => {
              if (innerData) {
                socket.emit("driverAdded", innerData)
              } else {
                console.log("Something Went Wrong")
              }
            })
          })
      }
    });

  } catch (error) {
    console.log("Error while Inserting driver", error);
  }

}

export default addDriver