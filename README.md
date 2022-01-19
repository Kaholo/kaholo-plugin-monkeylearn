# kaholo-plugin-monkeylearn
monkeylearn plugin for Kaholo
This plugin is based on [monkeylearn API](https://monkeylearn.com/api/v3/) and helps you to classify or extract the data using monkeylearn models.

## Method: Classify Text

**Description**

This method will take text & send it to monkeylearn [classifier API](https://monkeylearn.com/api/v3/#classifier-api) for classification

**Parameters**
1. text (String) **Required** - Text to be classified
2. model (String) **Required** - Monkeylearn model identifier
3. production_model (Boolean) **Optional** - Indicates if the classifications are performed by the production model.
3. API Key **Optional** - Monkeylearn API key

## Method: Extract Text

**Description**

This method will take text & send it to monkeylearn [classifier API](https://monkeylearn.com/api/v3/#classifier-api) for extraction

**Parameters**
1. data (String) **Required** - Text to be classified
2. model (String) **Required** - Monkeylearn model identifier
3. production_model (Boolean) **Optional** - Indicates if the classifications are performed by the production model.
3. API Key **Optional** - Monkeylearn API key