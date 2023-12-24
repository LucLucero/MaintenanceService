const express = require('express');



const app = express();

const porta = process.env.PORT || 3000;



app.listen(porta, () => {

    console.log("Server Iniciado na porta 3000");

});

