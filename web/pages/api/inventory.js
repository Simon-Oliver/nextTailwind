const jsonData = require("./inventoryData.json")
const fs = require("fs")

export default async (req, res) => {
    //const { count } = JSON.parse(req.body);
    console.log(req.body, req.method)
    try {
        if (req.method == "GET") {
            const data = { res: `Server response inventory`, jsonData }
            console.log("--------->", data)
            res.json(data);
        } else if (req.method == "POST") {
            console.log("-------> POST request")
            //const data = { res: `Server response inventory ${jsonData}` }
            const newData = [...jsonData, { name: "test" }]


            fs.writeFile("./inventoryData.json", JSON.stringify(newData), (err) => {
                if (err) {
                    console.log(err)
                }
                console.log(newData)
            })
            res.json(newData);
        }

    } catch (e) {
        console.log("Whoooooop Server error")
        res.status(e.status).json(e);
    }
}