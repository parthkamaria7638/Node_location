const express = require('express');
const app = express();
const port = 3000;
const config = require('./config/database');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const coords = require('./models/coordinates');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.database, () => {
    console.log('connected to mongodb');
});

app.use(express.static(path.join(__dirname + "/views")));

app.listen(port, () => {
    console.log('Server started on port 3000');
});

app.get('/', (req, res) => {
    res.render("index.html");
});

app.post('/setLocation', (req, res) => {
    let str = "new coordinate";
    let count = 0;
    let newCoords = {
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }
    console.log(newCoords);
    // coords.updateOne({ _id: "5ac5deb4c5196b070a81029b" }, newCoords, (err, coords) => {
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log("updated to db");
    //     console.log(coords);
    // });
    coords.find((err, coord) => {
        for (let i = 0; i < coord.length; i++) {
            if ( newCoords.name == coord[i].name ) {
                count++;
            }
        }
        if (count == 0) {
            coords.create(newCoords, (err, newCord) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Created a new coord");
                    console.log(newCord);
                }
            });
        } else {
            coords.updateOne({ name: newCoords.name }, newCoords, (err, newCord) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log("updated a coord");
                    console.log(newCord);
                }
            });
        }
    })
});