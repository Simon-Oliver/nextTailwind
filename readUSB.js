const SerialPort = require('serialport')
const usb = require('usb')



    let done = false


    let path = ''
    let ArduinoPort = ''


    // Promise approach
    SerialPort.list().then(ports => {
        let count = 0
        let allports = ports.length
        ports.forEach(function (port) {
            count = count + 1
            pm = port.productId

            console.log("------", ports)

            if (typeof pm !== 'undefined' && pm.includes('7523')) {
                path = port.path
                ArduinoPort = new SerialPort(path, { baudRate: 9600 })
                ArduinoPort.on('open', function () {
                    console.log(`connected! arduino is now connected at port ${path}`)
                })
                done = true
            }

            if (count === allports && done === false) {
                console.log(`can't find any arduino`)
            }
        })
    })





