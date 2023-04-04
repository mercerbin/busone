import { reals } from '../models/index.js';

export default function makeUser(socket, data) {

  try {
    reals.findOne({ email: data.email }, (err, value) => {
      if (value) {
        console.log("User already in ")
      }
      else {
        var real = reals(data);
        real.save()
      }
    });

  } catch (error) {
    console.log("Error while Inserting driver", error);
  }

}