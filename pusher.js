
const cors = require('cors');
const uuid = require('uuid').v4;
const next = require('next');
const Pusher = require('pusher');
const express = require('express');


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
    cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER
});

app.prepare()
    .then(() => {

        const server = express();

        server.use(cors());
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }));

        server.get('/people', (req, res, next) => {
            res.json({ status: 'success', people:[{name: "Test1", isOnline: true}, {name:"Test2", isOnline:false}] });
        });

        server.post('/message/:id', (req, res, next) => {
            const id = req.params.id;
            const {msg} = req.body

            console.log(req.body)

            pusher.trigger('websocket-test', 'message', {
                msg
            });

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

        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });

    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });