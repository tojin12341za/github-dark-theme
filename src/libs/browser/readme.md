# WebExtension browser API Polyfill

This [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) library allows extensions that use the Promise-based WebExtension/BrowserExt API being standardized by the W3 Browser Extensions group to run on Google Chrome with minimal or no changes.

```
npm install --save-dev webextension-polyfill
```

## Supported Browsers

| Browser                   | Support Level                                          |
| ------------------------- | ------------------------------------------------------ |
| Chrome                    | *Officially Supported*                                 |
| Firefox                   | *Officially Supported as a NO-OP*                      |
| Opera / Edge (>=79.0.309) | *Unofficially Supported* as a Chrome-compatible target |

## TypeScript

[Web-Extension Polyfill for TypeScript](https://github.com/Lusito/webextension-polyfill-ts) is a TypeScript ready "wrapper" for the [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill) by Mozilla.

It does include webextension-polyfill, so no need to manually add it.

```
npm install --save-dev webextension-polyfill-ts
```
