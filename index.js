const express = require("express");
const app = express();
const port = 5000;

const userRoutes = require ('./routers/user.router');

app.use(express.json());

app.use('/static', express.static(__dirname + '/public'));

app.use('/users',userRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Im OK'
    });
});

app.listen(port, () => console.log(`im started at http://localhost:${port}`));
