# WordProof API

The API makes it possible to connect with WordProof from almost every platform.

::: tip 
Before connecting with the API, please make an account on my.wordproof.com. After signing up you will receive a token which can use to authenticate on protected endpoints.
:::

## Headers

Always send the following headers with your requests to WordProof.

```json
{
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer {token}"
}
```

### Rate limit

Each route returns a `x-ratelimit-remaining` variable. Most routes allow 60 requests per minute.
The `POST /timestamps/bulk` routes allows 600 requests per minute.

## Endpoints

### POST Timestamp

```bash
POST /timestamps
```

::: tip 
Use the `/timestamp/bulk` route for timestamping large quantities of items.
:::

#### Parameters

|   Name   |  Type  | Description |      Required      |
| :------: | :----: | :---------: | :----------------: |
|uid|integer|unique id of resource on your system|:heavy_check_mark:|
|date_modified|string|an ISO-8601 representation of the datetime last modified|:heavy_check_mark:|
|title|string|title of item|:heavy_check_mark:, if no meta_title|
|meta_title|string|title of item|:heavy_check_mark:, if no title|
|url|string|public url pointing to item|:heavy_check_mark:|
|content|string|content of item|:heavy_check_mark:, if no hash_input|
|hash_input|string|HashInput of item|:heavy_check_mark:, if no content|

#### Response

```json
Status: 201

{
"id": "2050",
"hash": "7741ff80bc005e298bc52bd0510677ef9d34a80292cb98b58d927e4fc70b430c",
"hash_input": "{"@context":"https: //schema.org","@type":"HashInput", ...}"
}
```

### POST Bulk Timestamp

```bash
POST /timestamps/bulk
```

The required parameters and responses are identical to the `POST /timestamps`, but the **rate limit is set to 600 per
minute**. The items sent using this endpoint are put on a low priority queue and will be slower to respond with a
webhook.

### GET Timestamp

```bash
GET /timestamps/{id}
```

#### Parameters

|   Name   |  Type  | Description |      Required      |
| :------: | :----: | :---------: | :----------------: |
|id|integer|unique id|:heavy_check_mark:|

#### Response

```json
Status: 201

{
    "id": 2050,
    "hash": "7741ff80bc005e298bc52bd0510677ef9d34a80292cb98b58d927e4fc70b430c",
    "transaction": {
        "blockchain": "eosio_main",
        "transactionId": "9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08",
        "link": "https://bloks.io/tx/9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08",
    }
}
```

## Webhook

By default, WordProof tries to send a webhook to the `webhook_url` defined in your account. The POST request contains a header
called `Signature`  which the receiving app can use to check the payload hasn't been tampered with. The secret is the
sha256 hashed bearer token. Examples how to calculate the signature:

```php
$computedSignature = hash_hmac('sha256', $body, $hashedToken);
```          

```javascript
let computedSignature = CryptoJS.HmacSHA256($body, hashedToken);
```

The `computedSignature` should match the signature in the header of the request.

The body contains the following data:

```json
{
    "id": 2050,
    "uid": 1,
    "transaction": {
        "blockchain": "eosio_main",
        "transactionId": "9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08",
        "link": "https://bloks.io/tx/9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08",
    }
}
```

When the url to which we're sending the webhook fails to send a response with a 2xx status code, we consider the call as
failed. The call will also be considered failed if the server doesn't respond within 5 seconds. After the third try, no
more webhooks will be sent for the particular timestamp.

## Errors

WordProof uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes
in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (
e.g., a required parameter was omitted). Codes in the 5xx range indicate an error with our servers.

Most errors will also include a human-readable `message`.

