// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var QRCode = require('qrcode')

export default async (req, res) => {
  res.statusCode = 200
  const {email, password} = JSON.parse(req.body);
try{
  const qrData = await checkAuth(email, password)
  console.log("--------->",qrData)
  res.json(qrData);
  
} catch(e){
  res.status(e.status).json(e);
}

  
}


const checkAuth = async (email, pw) => {
  let resObj = {
    auth: false,
    status: 0,
    message: ""
  }
  if(email == "test@test.com" && pw == "123"){
    resObj.auth = true;
    resObj.status = 200;
    resObj.code = await QRCode.toDataURL('I am a pony!')
    return resObj
    
  } else{
    resObj.message = "Username or password incorrect"
    resObj.status = 401;
    throw resObj;
  }
}