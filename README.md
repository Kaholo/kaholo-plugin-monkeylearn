# kaholo-plugin-monkeylearn

This plugin is based on the [MonkeyLearn API](https://monkeylearn.com/api/v3/) and helps you to classify or extract data using MonkeyLearn models.

## Settings
1. MonkeyLearn API Key (Vault) - The default MonkeyLearn API key to connect to Monkeylearn. [Learn More](https://monkeylearn.com/api/v3/#authentication)

## Method: Classify Text

This method will take text & send it to MonkeyLearn [classifier API](https://monkeylearn.com/api/v3/#classifier-api) for classification.

### Parameters
1. Text (String) **Required** - Text to be classified. 
2. Model (String) **Required** - MonkeyLearn model identifier. [Learn More](https://monkeylearn.com/text-classifiers/)
3. Production Model (Boolean) **Optional** - Indicates if the classifications are performed by the production model. 
3. API Key **Optional** - MonkeyLearn API key.

## Method: Extract Text

This method will take text & send it to the MonkeyLearn [extractor API](https://monkeylearn.com/api/v3/#extractor-api) for extraction.

### Parameters
1. Data (String) **Required** - Text to be extracted.
2. Model (String) **Required** - MonkeyLearn model identifier. [Learn More](https://monkeylearn.com/text-extractors/)
3. Production Model (Boolean) **Optional** - Indicates if the extractions are performed by the production model.
3. API Key **Optional** - MonkeyLearn API key.
