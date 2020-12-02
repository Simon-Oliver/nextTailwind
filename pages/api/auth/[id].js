const fs = require("fs")

export default function handler(req, res) {
  const {
    query: { id },
  } = req
  console.log("SERVER ----",req.query)
  const dataRet = fakeDataBase(id)
  console.log(dataRet)
  return res.json(dataRet);

}

const fakeDataBase = (id) => {
  if(id == "1234"){
    return {isLogin: true}
  } else {
    return {isLogin: false, }

  }

}