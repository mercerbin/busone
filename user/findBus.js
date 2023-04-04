import { reals } from '../models/index.js'


export default function findBus(socket, data) {
  let liveBus = [];
  reals.find({ tags: [data.source, data.desti] }, { _id: 0, name: 1, route: 1 },
    function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        // docs.route.map((val) => {
        //   console.log(val)
        // })
        docs.map((val) => {
          if (val.route.indexOf(data.source) < val.route.indexOf(data.desti)) {
            liveBus.push(val);
          }
        })
        console.log(liveBus);
        socket.emit("setBus", liveBus)
      }
    })

};