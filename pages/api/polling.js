const jsonData = require("./testData.json")

export default async (req, res) => {
    //const { count } = JSON.parse(req.body);
    try {
        const data = { res: `Server response isLogin ${jsonData.isLogin}` }
        console.log("--------->", data)
        res.json(data);

    } catch (e) {
        console.log("Whoooooop Server error")
        res.status(e.status).json(e);
    }


}