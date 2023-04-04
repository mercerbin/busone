import { reals } from '../models/index.js';

const driverDelete = (socket, data) => {
  try {
    reals.deleteMany({ email: data.email }, (err, value) => {
      if (err) {
        console.log(err)
      }
    });

  } catch (error) {
    console.log("Error while Inserting driver", error);
  }

}

export default driverDelete