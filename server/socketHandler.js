import { io } from "./server.js";
import { authenticateUser, checkUser, createUser, delUser, getUser, makeUser, startUser } from '../user/index.js'
import { getBus, getStops, getRoute } from '../driver/index.js'
import { login, register, confirmEmail, forgotPass, newPass, resendCode, findBus } from '../user/index.js'
import { addLocation, getLocation, deleteLocation, getDriver, rejectDriver, acceptDriver, addRoute, deleteRoute, getARoute } from "../admin/index.js";
import { driverReq, driverEC, driverResend, addDriver, driverUpdates, driverDelete, getUpdates, allRoute } from "../driver/index.js"

const socketHandler = () => {
  io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    // Admin
    socket.on('addLocation', (token) => {
      addLocation(socket, token)
    })

    socket.on('getLocations', (token) => {
      getLocation(socket, token)
    })

    socket.on('deleteLocation', (token) => {
      deleteLocation(socket, token)
    })

    socket.on('addRoute', (token) => {
      addRoute(socket, token)
    })

    socket.on('getARoute', (token) => {
      getARoute(socket, token)
    })

    socket.on('deleteRoute', (token) => {
      deleteRoute(socket, token)
    })

    socket.on('getDrivers', (token) => {
      getDriver(socket, token)
    })

    socket.on('approveDriver', (token) => {
      acceptDriver(socket, token)
    })

    socket.on('rejectDriver', (token) => {
      rejectDriver(socket, token)
    })

    // Driver
    socket.on('driverReq', (token) => {
      driverReq(socket, token)
    })

    socket.on('driverEmailConfirm', (token) => {
      driverEC(socket, token)
    })

    socket.on('resendDriverCode', (token) => {
      driverResend(socket, token)
    })

    socket.on('addDriver', (token) => {
      addDriver(socket, token)
    })

    socket.on('driverUpdates', (token) => {
      driverUpdates(socket, token)
    })

    socket.on('driverDelete', (token) => {
      driverDelete(socket, token)
    })

    socket.on('getUpdates', (token) => {
      getUpdates(socket, token)
    })

    socket.on('login', (token) => {
      login(socket, token)
    })

    socket.on('register', (token) => {
      register(socket, token)
    })

    socket.on('confirmEmail', (token) => {
      confirmEmail(socket, token)
    })

    socket.on('forgotPass', (token) => {
      forgotPass(socket, token)
    })

    socket.on('newPass', (token) => {
      newPass(socket, token)
    })

    socket.on('resendCode', (token) => {
      resendCode(socket, token)
    })

    socket.on('allRoute', (token) => {
      allRoute(socket, token)
    })

    socket.on("getRoute", function (data) {
      getRoute(socket, data);
    });

    // user

    socket.on('findBus', function (token) {
      findBus(socket, token);
    })

    // old

    socket.on('user.get', function (token) {
      getUser(socket, token);

    });

    socket.on('user.create', function (data) {
      createUser(socket, data);

    });

    socket.on('user.make', function (data) {
      makeUser(socket, data);

    });

    socket.on('user.start', function (data) {
      startUser(socket, data);

    });

    socket.on('user.login', function (data) {
      authenticateUser(socket, data);

    });

    socket.on('user.check', function (data) {
      checkUser(socket, data);

    });

    socket.on('user.delete', function (data) {
      delUser(socket, data);

    });

    socket.on("getStops", function (data) {
      getStops(socket, data);
    });

    socket.on("getustop", function (data) {
      getUStops(socket, data);
    });

    socket.on("getbus", function (data) {
      getBus(socket, data);
    });

    socket.on("getbname", function (data) {
      getBName(socket, data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected: ", socket.id);
    });

  })

}

export default socketHandler