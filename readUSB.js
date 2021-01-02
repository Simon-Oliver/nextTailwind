const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline');
const usb = require('usb')

const createdPorts = new Map();

const createPort = (port, enable) => {
    if (createdPorts.has(port)) {
        const oldPort = createdPorts.get(port);
        // you could close the port before recreating it
        // or return the old instance as hardwarePort
        if (oldPort.isOpen) oldPort.close();
    }

    hardwarePort = new SerialPort(port, {
        baudRate: 9600,
        autoOpen: enable
    });
    let currentPort = port;

    createdPorts.set(port, hardwarePort);

    // not needed when hardwarePort has an 'isOpen` property
    isPortOpen = enable;

    const parser = hardwarePort.pipe(new Readline({ delimiter: '\n' }));
    // Read the port data
    parser.on('data', data => {
        console.log('got word from arduino:', data);
    });

    hardwarePort.on('open', function () {
        console.log('opened');
    });
    hardwarePort.on('close', function () {
        console.log('closed');
    });

    hardwarePort.on('error', err => {
        console.log(err);
    });
};



usb.on("attach", () => {
    SerialPort.list().then(ports => {
        let done = false
        let count = 0
        let allports = ports.length
        ports.forEach(function (port) {
            count = count + 1
            pm = port.productId


            if (typeof pm !== 'undefined' && pm.includes('7523')) {

                path = port.path
                const ArduinoPort = createPort(path, true)

                done = true

            }

            if (count === allports && done === false) {
                console.log(`can't find any arduino`)
            }
        })
    }).catch(err => console.log(err))

})

usb.on("detach", () => {
    console.log("disconnected ")
})








    // console.log("Running once a scond")
    // let ports = await SerialPort.list();
    // if (ports) stopped = true
    // const scannerPort = ports.filter(
    //     (port) => port.productId === "7523"
    // );
    // if (scannerPort.length !== 0) {
    //     response = { Message: "Connected" };
    //     connected = true

    //     newPort = port
    // } else {
    //     response = { Message: "Not Connected" };
    //     connected = false
    //     port = false
    // }
    // console.log(response);



