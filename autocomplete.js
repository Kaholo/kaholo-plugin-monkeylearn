const { getMonkeylearnModels, extractApiKey } = require('./helpers');
const parsers = require('./parsers');

function mapParams(actionParams) {
    const params = {};
    actionParams.forEach(param => {
        params[param.name] = parsers.autocomplete(param.value);
    });
    return params;
}

async function getClassifierModels(query, pluginSettings, actionParams) {
    const params = mapParams(actionParams);
    const settings = mapParams(pluginSettings);
    const modelResponse = await getMonkeylearnModels('classifiers', extractApiKey(params, settings));
    const models = modelResponse.body.map(model => {
        return {
            id: model.id,
            value: model.name
        }
    });
    return Promise.resolve(models);
}

async function getExtractorModels(query, pluginSettings, actionParams) {
    const params = mapParams(actionParams);
    const settings = mapParams(pluginSettings);
    const modelResponse = await getMonkeylearnModels('extractors', extractApiKey(params, settings));
    const models = modelResponse.body.map(model => {
        return {
            id: model.id,
            value: model.name
        }
    });
    return Promise.resolve(models);
}

module.exports = { getClassifierModels, getExtractorModels }
