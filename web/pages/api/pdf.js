var pdf = require('html-pdf');
const fs = require("fs")

export default async (req, res) => {
    let options = { format: 'A4' };
    // Example of options with args //
    // let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

    let file = {
        content: `
<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <style>
      .page { page-break-before: always }
         .invoice-box {
         max-width: 800px;
         height: 100%;
         margin: auto;
         padding: 30px;
         border: 1px solid #eee;
         box-shadow: 0 0 10px rgba(0, 0, 0, .15);
         font-size: 16px;
         line-height: 24px;
         font-family: 'Helvetica Neue', 'Helvetica',
         color: #555;
         }
         .margin-top {
         margin-top: 50px;
         }
         .justify-center {
         text-align: center;
         }
         .invoice-box table {
         width: 100%;
         line-height: inherit;
         text-align: left;
         }
         .invoice-box table td {
         padding: 5px;
         vertical-align: top;
         }
         .invoice-box table tr td:nth-child(2) {
         text-align: right;
         }
         .invoice-box table tr.top table td {
         padding-bottom: 20px;
         }
         .invoice-box table tr.top table td.title {
         font-size: 45px;
         line-height: 45px;
         color: #333;
         }
         .invoice-box table tr.information table td {
         padding-bottom: 40px;
         }
         .invoice-box table tr.heading td {
         background: #eee;
         border-bottom: 1px solid #ddd;
         font-weight: bold;
         }
         .invoice-box table tr.details td {
         padding-bottom: 20px;
         }
         .invoice-box table tr.item td {
         border-bottom: 1px solid #eee;
         }
         .invoice-box table tr.item.last td {
         border-bottom: none;
         }
         .invoice-box table tr.total td:nth-child(2) {
         border-top: 2px solid #eee;
         font-weight: bold;
         }
         @media only screen and (max-width: 600px) {
         .invoice-box table tr.top table td {
         width: 100%;
         display: block;
         text-align: center;
         }
         .invoice-box table tr.information table td {
         width: 100%;
         display: block;
         text-align: center;
         }
         }
      </style>
   </head>
   <body>
      <div class="invoice-box">
         <table cellpadding="0" cellspacing="0">
            <tr class="top">
               <td colspan="2">
                  <table>
                     <tr>
                        <td class="title"><img  src="https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1"
                           style="width:100%; max-width:156px;"></td>
                        <td>
                           Datum: Test 1234}
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
            <tr class="information">
               <td colspan="2">
                  <table>
                     <tr>
                        <td>
                           Customer name: Max Muster
                        </td>
                        <td>
                           Receipt number: 445566543
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
            <tr class="heading">
               <td>Bought items:</td>
               <td>Price</td>
            </tr>
            <tr class="item">
               <td>First item:</td>
               <td>CHF 55$</td>
            </tr>
            <tr class="item">
               <td>Second item:</td>
               <td>CHF 77$</td>
            </tr>
         </table>
         <br />
         <h1 class="justify-center">Total price: 10234</h1>
      </div>
      <div class="invoice-box page">
         <table cellpadding="0" cellspacing="0">
            <tr class="top">
               <td colspan="2">
                  <table>
                     <tr>
                        <td class="title"><img  src="https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1"
                           style="width:100%; max-width:156px;"></td>
                        <td>
                           Datum: Test 1234}
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
            <tr class="information">
               <td colspan="2">
                  <table>
                     <tr>
                        <td>
                           Customer name: Max Muster
                        </td>
                        <td>
                           Receipt number: 445566543
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
            <tr class="heading">
               <td>Bought items:</td>
               <td>Price</td>
            </tr>
            <tr class="item">
               <td>First item:</td>
               <td>CHF 55$</td>
            </tr>
            <tr class="item">
               <td>Second item:</td>
               <td>CHF 77$</td>
            </tr>
         </table>
         <br />
         <h1 class="justify-center">Total price: 10234</h1>
      </div>
   </body>
</html>
` };

    pdf.create(file.content, options).toFile('./test.pdf', function (err, response) {
        if (err) return console.log(err);
        console.log(response);

        const file = `/Users/simon.stauffer/Desktop/Code/nextjs-test/web/test.pdf`
        const imageBuffer = fs.readFileSync(file)
        res.setHeader('Content-Type', "application/pdf")
        res.send(imageBuffer)


    }
    )



}


