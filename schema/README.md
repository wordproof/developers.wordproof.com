# Schema Output

::: tip NOTICE
The JSON-LD listed below [is proposed](https://github.com/schemaorg/schemaorg/issues/2756) to be merged with Schema.org and is subject to change.
:::

## Adding a timestamp

```json
{
  "@context":"https://schema.org",
  "@type":"Article",
  ...
  "timestamp":
  {
    "@type":"BlockchainTransaction",
    "identifier":"0fce9c929ef03838775703d4cf55b7b1bdd6a5cc3503a2606dbe3b6c0cf0a802",
    "hash":"8A258E516081C36B866812E49495628CBDC1DD4126DB321A28AE95EE55B83BAB",
    "hashLink":"https://example.com/json/?hl=8A258E516081C36B866812E49495628CBDC1DD4126DB321A28AE95EE55B83BAB",
    "recordedIn":
    {
      "@type":"Blockchain",
      "name":"eos"
    }
  }
}
```

Please make sure you return an endpoint in the `hashLink` parameter which in turn return the HashInput object. You could use the hash as a unique identifier for different revisions or articles. The identifier refers to the unique identifier of the blockchain transaction (transaction id).

## HashInput

```json
{
  "@context":"https://schema.org",
  "@type":"HashInput",
  "dateCreated":"2020-09-27T20:28:41+01:00",
  "isBasedOn":"https://example.com/time-stamped-article/",
  "text":"<h1>Nunc eget lorem dolor sed</h1>\t\t\n\t\t\t<h2>Suspendisse sed nisi lacus sed viverra tellus.</h2>\t\t\n\t\t\t<p>Non consectetur a erat nam at lectus urna. Ut porttitor leo a diam sollicitudin tempor id eu.</p>..."
}
```