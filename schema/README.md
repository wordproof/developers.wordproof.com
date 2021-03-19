# Schema Output

::: tip NOTICE 
The JSON-LD listed below [is proposed](https://github.com/schemaorg/schemaorg/issues/2756) to be merged
with Schema.org and is subject to change.
:::

## Adding a timestamp

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  ...
  "timestamp": {
    "@type": "BlockchainTransaction",
    "identifier": "0fce9c929ef03838775703d4cf55b7b1bdd6a5cc3503a2606dbe3b6c0cf0a802",
    "hash": "8A258E516081C36B866812E49495628CBDC1DD4126DB321A28AE95EE55B83BAB",
    "hashLink": "https://example.com/json/?hash=8A258E516081C36B866812E49495628CBDC1DD4126DB321A28AE95EE55B83BAB",
    "recordedIn": {
      "@type": "Blockchain",
      "name": "eosio_main"
    }
  }
}
```

Please make sure you return an endpoint in the `hashLink` parameter which in turn return the HashInput object. You could
use the hash as a unique identifier for different revisions or articles.

## HashInput

```json
{
  "@context": "https://schema.org",
  "@type": "HashInput",
  "dateCreated": "2020-09-27T20:28:41+01:00",
  "isBasedOn": "https://example.com/time-stamped-article/",
  "text": "<h1>Nunc eget lorem dolor sed</h1>\t\t\n\t\t\t<h2>Suspendisse sed nisi lacus sed viverra tellus.</h2>\t\t\n\t\t\t<p>Non consectetur a erat nam at lectus urna. Ut porttitor leo a diam sollicitudin tempor id eu.</p>..."
}
```

If you want to use the HashInput to create a hash yourself, make sure to hash the minified, UTF-8 encoded string representation of the JSON object.

## Display a certificate

With the Schema in place, you can use the certificate from our UIKit. The language will be determined by the `lang`
the attribute in the HTML tag. Other options for `w-certificate` can be found on
the [dedicated documentation page](https://uikit.wordproof.com/pages/w-certificate.html).

As we use web components, no frontend framework is required, and the size of the requested scripts is small.

::: warning NOTICE
Fonts are not loaded properly currently. This will be fixed in a future update. 
:::

```html

<html lang="en">
<head>
    <script type="module" src="https://unpkg.com/@wordproof/uikit/dist/uikit/uikit.esm.js"></script>
    <script nomodule src="https://unpkg.com/@wordproof/uikit/dist/uikit/uikit.js"></script>

    <script type="application/ld+json">{"@context": "http://schema.org", ..., "timestamp": { ... }}</script>
</head>
<body>
    <w-certificate></w-certificate>
</body>
</html>

```