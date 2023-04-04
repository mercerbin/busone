import { users, drivers } from "../models/index.js";
import mail from "../mailer/mail.js";

const addLocation = (socket, data) => {
  var driver = new users(data);

  users.findOne({ "email": data.email }, null, (err, data) => {
    if (data) {
      return socket.emit('acceptDriverError', err || {
        message: "Email Already Exists"
      });
    } else {
      driver.save().then(function (data) {
        drivers.deleteOne({ "email": data.email }).then(function () {
          mail(data.email, null, "Driver Confirmed", "Your Driver Account has Been Confirmed")
          return socket.emit('acceptDriverSuccess', {
            message: 'Added Successfully'
          });
        }).catch(function (error) {
          console.log(error);
        });
      });
    }
  });

};

export default addLocation