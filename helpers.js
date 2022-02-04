const MonkeyLearn = require('monkeylearn')
const parsers = require('./parsers')

function extractApiKey(params, settings) {
    const key = parsers.string(params.MONKEYLEARN_API_KEY) || parsers.string(settings.MONKEYLEARN_API_KEY)
    if (!key) throw new Error("API Key is required")
    return key
}

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


async function getMonkeylearnModels(modelType, apiKey) {
    const ml = new MonkeyLearn(apiKey);
    return ml[modelType].list();
}

module.exports = {
    classifyIt,
    extractIt,
    getMonkeylearnModels,
    extractApiKey
}