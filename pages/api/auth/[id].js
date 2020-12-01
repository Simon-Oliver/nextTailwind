const fs = require("fs")
const fileName = require("../testData.json")
const file = fileName

export default function handler(req, res) {
  const {
    query: { id },
  } = req

  file.key = id;

  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
    return res.json({ hello: id });
  });

  
}