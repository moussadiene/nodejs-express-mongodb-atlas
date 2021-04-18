const express = require('express');

const router = express.Router();

const Client = require('../model/Client');

router.get('/',async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.json({message : error});
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);

    const client = new Client({
        prenom: req.body.prenom,
        nom : req.body.nom,
        date_naiss: req.body.date_naiss,
        genre: req.body.genre,
        email: req.body.email,
        telephone: req.body.telephone,
        date: req.body.date
    });

    try {
        const addClient =  await client.save();
        res.json(addClient);
    } catch (error) {
        res.json({message : error});
    }     
});

router.get('/:clientId', async (req, res) => {
    //console.log(req.params);
    try {
        const client = await Client.findById(req.params.clientId);
        res.json(client);
    } catch (error) {
        res.json({message : error});
    }
});

router.delete('/:clientId', async (req, res) => {
    //console.log(req.params);
    try {
        const rm = await Client.remove({_id :req.params.clientId});
        res.json(rm);
    } catch (error) {
        res.json({message : error});
    }
});

router.patch('/:clientId', async (req, res) => {
    try {
        const updateClient = await Client.updateMany(
            {_id :req.params.clientId},
                {
                    $set : {
                       
                        nom : req.body.nom,
                        date_naiss: req.body.date_naiss,
                        genre: req.body.genre,
                        email: req.body.email,
                        telephone: req.body.telephone,
                        date: req.body.date
                    }
                }
            );
        res.json(updateClient);
    } catch (error) {
        res.json({message : error});
    }
});
module.exports = router;