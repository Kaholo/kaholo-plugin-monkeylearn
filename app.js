const { classifyIt, extractIt, extractApiKey } = require('./helpers');
const parsers = require('./parsers');

async function classifyText(action, settings) {
    const params = {
        text: parsers.string(action.params.text),
        modelId: parsers.string(action.params.model.id),
        productionModel: parsers.boolean(action.params.productionModel),
        apiKey: extractApiKey(action.params, settings)
    };

    const classifyResponse = await classifyIt(params);

    return classifyResponse.body;
}


async function extractText(action, settings) {
    const params = {
        text: parsers.string(action.params.text),
        modelId: parsers.string(action.params.model.id),
        productionModel: parsers.boolean(action.params.productionModel),
        apiKey: extractApiKey(action.params, settings)
    };

    const extractResponse = await extractIt(params);

    return extractResponse.body;
}

module.exports = {
    classifyText,
    extractText,
    ...require("./autocomplete")
};        