import { drivers } from '../models/index.js'
import mail from '../mailer/mail.js'

const confirmDriverEmail = (socket, data) => {
  try {
    drivers.findOne({ "email": data.email, "auth": data.code }, null, (err, data) => {
      if (data) {
        drivers.updateOne({ "email": data.email }, { "auth": "" })
          .then(() => {
            mail(data.email, null, "Email Confirmed", "Your Email Account for Busone is Confirmed, Now Wait for your Account Confirmation")
            return socket.emit('driverEmailConfirmed', { message: "success" })
          })
      } else {
        return socket.emit('driverEmailError', err || {
          message: 'Invalid Auth Token'
        });
      }
    });
  } catch (error) {
    console.log("Error while logging in", error)
  }
}

export default confirmDriverEmail