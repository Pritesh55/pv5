// import Thid party module :: Express...
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4200;

app.get('/' , ( req, resp) => {
    resp.send("Welcome to PV4 Home Page :: Github.....");
} );


app.listen(PORT , () => {
    console.log(" Wesite is live at http:/localhost:" + PORT + "/")
} );