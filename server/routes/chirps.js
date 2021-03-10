const express = require('express');
const chirpsStore = require('../chirpsStore.js');

let router = express.Router();

router.get('/:id', (req, res) => {
    let id = req.params.id
    if(id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
})

router.put('/', (req, res) => {
   
})

router.delete('/', (req, res) => {
    
})
nodule.exports = router;
