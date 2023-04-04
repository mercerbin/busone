import { drivers, users } from '../models/index.js'
import mail from '../mailer/mail.js'

function randomAuth(length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const driverReq = (socket, sdata) => {
  var driver = new drivers(sdata);

  try {
    users.findOne({ email: sdata.email }, null, (err, mdata) => {
      if (mdata) {
        return socket.emit('driverReqError', err || {
          message: "Email Already Exists"
        });
      } else {
        drivers.findOne({ email: sdata.email }, null, (err, data) => {
          if (data) {
            return socket.emit('driverReqError', err || {
              message: "Email Already Exists"
            });
          } else {
            driver.save().then(function (idata) {
              const random = randomAuth(6)
              mail(sdata.email, random)
              drivers.updateOne({ "email": sdata.email }, { "auth": random })
                .then(() => {
                  return socket.emit('driverReqSuccess', {
                    message: 'Registered Successfully',
                    email: sdata.email
                  });
                })
            });
          }
        });
      }
    });

  } catch (error) {
    console.log("Error creating user", error);
  }

}

export default driverReq