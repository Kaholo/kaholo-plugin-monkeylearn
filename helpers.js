const MonkeyLearn = require('monkeylearn')

async function classifyIt(params) {
    const ml = new MonkeyLearn(params.apiKey)
    return ml.classifiers.classify(params.modelId, [{
        text: params.text
    }], {
        production_model: params.productionModel
    });
}

async function extractIt(params) {
    const ml = new MonkeyLearn(params.apiKey)
    return ml.extractors.extract(params.modelId, [{
        text: params.text
    }], {
        production_model: params.productionModel
    });
}


async function getMonkeylearnModels(modelType, params) {
    const ml = new MonkeyLearn(params.MONKEYLEARN_API_KEY);
    return ml[modelType].list();
}

module.exports = {
    classifyIt,
    extractIt,
    getMonkeylearnModels
}