const express = require("express");
const router = express.Router();
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

router.get("/randomtexts/:count", async (req, res) => {
    try {        
        res.status(200).send(lorem.generateSentences(parseInt(req.params.count)));
    } catch (e) {
      if (e["Code"] == "NoSuchKey") res.status(200).send([]);
      else res.status(500).send(e);
    }
});

module.exports = router;