# WordProof API

The API mixed possible to connect with WordProof from almost every platform. Before connecting with the API, please make an account on my.wordproof.com. After signing up you will receive a token which can use to authenticate on protected endpoints.

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
  "hash_input": "{test}"
}
```

### GET Timestamp

```bash
GET /timestamps/{uid}
```

#### Parameters

|   Name   |  Type  | Description |      Required      |
| :------: | :----: | :---------: | :----------------: |
|uid|integer|unique id|:heavy_check_mark:|

#### Response

```json
Status: 201

{
  "id": "2050",
  "hash": "7741ff80bc005e298bc52bd0510677ef9d34a80292cb98b58d927e4fc70b430c"
  "transaction": {
    "blockchain": "eosio_main",
    "transactionId": "tnhdjsz",
    "link": "https://bloks.io/tx/tnhdjsz",
  }
}
```

## Callback

By default, WordProof tries to send a callback to the url defined in your account. This callback contains a secret, which is the hashed version of your token. Please verify this by hashing your own token (sha256) before saving any of the fields.