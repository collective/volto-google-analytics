# volto-google-analytics

A widget for [Volto](https://github.com/plone/volto) to insert values for any language enabled

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.

Created with [voltocli](https://github.com/nzambello/voltocli).

## Usage

Add in your `.env` file of choice a variable:

```
RAZZLE_GA_CODE=UA-XXXXXXXX-X
```

and include `useGoogleAnalytics` in your project, like:

```jsx
import { useGoogleAnalytics } from 'volto-google-analytics'

const Footer = () => {
  useGoogleAnalytics()

  return (
    ...
  )
}
```

### Cookies expire

By default, Google Analytics cokkies expiration is set to 6 month.
But you colud change the expiration period (expressing it in seconds), setting it from config:

```jsx
config.settings['volto-google-analytics'].cookieExpires = 6 * 30 * 24 * 60 * 60; // in seconds. Default: 6 month
```
