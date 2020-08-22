const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res)=> {
    const surveyToAdd = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [surveyToAdd.feeling, surveyToAdd.understanding, surveyToAdd.support, surveyToAdd.comments])
        .then((responseFromDatabase) => {
            console.log(responseFromDatabase);
            // 201 means "created"
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error in POST /survey ${error}`);
            res.sendStatus(500);
        });
});


module.exports = router;