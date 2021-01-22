const fs = require("fs")
var QRCode = require('qrcode')

export default async function handler(req, res) {
  const {
    query: { id },
  } = req


let obj = {}
  try {
    console.log("SERVER ----", req.query)
    obj.code = await QRCode.toDataURL(`"id:${id}"`)
    console.log(obj)
    return res.json(obj);

  } catch (e) {
    res.status(e.status).json(e);
  }
}
