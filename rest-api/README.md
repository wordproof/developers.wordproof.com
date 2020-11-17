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
  "Authentication": "Bearer {token}"
}
```

## Endpoints

### POST Timestamp

```bash
POST /timestamps
```

#### Parameters

|   Name   |  Type  | Description |      Required      |
| :------: | :----: | :---------: | :----------------: |
|uid|integer|unique id|:heavy_check_mark:|
|hash_input|integer|HashInput of item|:heavy_minus_sign:|
|date_modified|iso-8601|date last modified|:heavy_check_mark:|
|title|integer|title of item|:heavy_check_mark:, if no hash_input|
|content|integer|content of item|:heavy_check_mark:, if no hash_input|
|url|integer|public url pointing to item|:heavy_check_mark:, if no hash_input|

#### Response

```json
Status: 201

{
  "id": "2050",
  "hash": "7741ff80bc005e298bc52bd0510677ef9d34a80292cb98b58d927e4fc70b430c",
  "hash_input": "{"@context":"https://schema.org","@type":"HashInput", ...}"
}
```

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
  "id": "2050",
  "hash": "7741ff80bc005e298bc52bd0510677ef9d34a80292cb98b58d927e4fc70b430c"
  "transaction": {
    "blockchain": "eos",
    "transactionId": "9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08",
    "link": "https://bloks.io/tx/9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08",
  }
}
```

## Callback

By default, WordProof tries to send a callback to the url defined in your account. The callback contains a header called `Signature`  which the receiving app can use to check the payload hasn't been tampered with. The secret is the sha256 hashed bearer token. Example how to calculate the signature:
 
```php
$computedSignature = hash_hmac('sha256', $body, $hashedToken);
```          
                                                                         
```javascript
let computedSignature = CryptoJS.HmacSHA256($body, hashedToken);
```

The `computedSignature` should match the signature in the header of the request.