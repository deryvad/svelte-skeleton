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


exports.handler = async function (event, context) {
  

    return {
      statusCode: 200,
      body: lorem.generateSentences(parseInt(200)),
    };
  }