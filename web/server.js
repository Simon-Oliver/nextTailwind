const cors = require('cors');
const uuid = require('uuid').v4;
const next = require('next');
const Pusher = require('pusher');
const express = require('express');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
//const serialPort = new SerialPort('/dev/cu.usbserial-14320', { baudRate: 9600 });

//const parser = serialPort.pipe(new Readline({ delimiter: '\n' }));





const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8000;

const app = next({ dev });
const handler = app.getRequestHandler();

// Ensure that your pusher credentials are properly set in the .env file
// Using the specified variables
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
});

let messages = [{ msg: 'Hi! How are you?', uid: 123, isSeen: false, mid: 78 }];
let users = [];

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    // Read the port data
    // serialPort.on("open", () => {
    //   console.log('serial port open');
    // });
    // parser.on('data', data => {
    //   console.log('got word from arduino:', data);
    // });

    // server.get('/people', (req, res, next) => {
    //   res.json({
    //     status: 'success',
    //     people: [
    //       { name: 'Test1', status: '' },
    //       { name: 'Test2', status: '' },
    //     ],
    //   });
    // });

    server.post('/message/:id', (req, res, next) => {
      const id = req.params.id;
      const { msg, mid } = req.body;
      const time = Date.now();
      messages.push({ msg, uid: id, time, mid, isSeen: false });

      console.log(req.body);

      pusher.trigger('websocket-test', 'message', {
        messages,
      });

      return res.status(200).send();
    });

    server.post('/user/:id', (req, res, next) => {
      const id = req.params.id;
      const { name, status } = req.body;

      const index = users.findIndex((e) => e.id === id);

      if (index === -1) {
        if (name) {
          users.push({ name, status, id });
        }
      } else {
        users[index] = { ...users[index], status };
      }

      pusher.trigger('websocket-test', 'users', {
        users,
      });
      console.log('After pusher trigger', users);
    });

    server.post('/seen/:id', (req, res, next) => {
      const id = req.params.id;

      let newMsg = messages.filter(e => e.mid === req.body.mid && !e.isSeen && e.uid !== id)
      console.log("NewMsg", newMsg)
      if (newMsg.length > 0) {
        newMsg = { ...newMsg[0], isSeen: true }

        const updatedMsg = messages.map(e => {
          if (newMsg.mid === e.mid) {
            return { ...e, isSeen: true }
          } else { return { ...e } }

        })

        messages = updatedMsg

        console.log(messages)
        pusher.trigger('websocket-test', 'messageSeen', { messages });
      }


      // if (uid == id) {
      //   const data = obj
      //   console.log('pushing ---->', data, obj, req.body)
      //   pusher.trigger('websocket-test', 'messageSeen', { ...data, isSeen: true });

      // }
      return res.status(200).send();
    });

    server.get('/init', (req, res) => {
      let obj = { users, messages };
      console.log(obj);
      return res.json(obj);
    });

    // server.post('/:presence/:id', (req, res, next) => {
    //     const id = req.params.id;
    //     const presence = req.params.presence;

    //     if (['online', 'offline'].includes(presence)) {
    //         people.forEach((person, index) => {
    //             if (person.id === id) {
    //                 return people[index] = { ...person, online: presence === 'online' };
    //             }
    //         });
    //     }
    // });

    server.get('*', (req, res) => {
      return handler(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
