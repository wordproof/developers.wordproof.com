# Plug and Play

WordProof comes with a multiple plug-and-play apps and api's. Currently, these options include:

* [WordPress plugin](#wordpress)
* [Rest API](/rest-api)
* [Drupal module](#drupal)

Under construction:

* [Shopify app](#shopify)
* [WordPress SDK](#wordpress)

## WordPress

WordPress plug-in is open source and accessible in the
public [WordPress plugin repository](https://wordpress.org/plugins/wordproof-timestamp/). Do you want to include WordProof natively into your own plugin? Please get in touch to discuss how to implement our WordPress
SDK.

## Drupal

The Drupal module [is released by SWIS](https://www.swis.nl/wordproof-for-drupal-released) and [available for download](https://www.drupal.org/project/wordproof). The Drupal module is the first open source WordProof product built by an external organisation.  

## Shopify

We are actively working on a Shopify extension. If you are interested, please mail [Jelle](mailto:jelle@wordproof.com) if you have
inquiries.

### Installing

### Common Issues

**After installing or publishing a new theme, WordProof is not shown anymore**

Your products, pages and articles are still being timestamped, but the markup required to show these in the frontend is not active anymore. Please go through the setup again to install the necessary files by reinstalling the WordProof app. 

**I want to change the location of the certificate link**

During the app install, we automatically create three new sections. The section that contain the certificate link is added to the bottom on product.liquid, page.liquid and article.liquid. The schema and scripts section is added to head.liquid.

**When are my products timestamped?**

Every 15 minutes, new products, pages and articles are automatically timestamped.