# volto-google-analytics

A widget for [Volto](https://github.com/plone/volto) to insert values for any language enabled

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.

Created with [voltocli](https://github.com/nzambello/voltocli).

If using Volto < 16, use v1.3.0.

## Usage

Add in your `.env` file of choice a variable:

```
RAZZLE_GA_CODE=UA-XXXXXXXX-X
#to use simple Universal Analytics (will be depracated in 2023)


RAZZLE_GA4_CODE=G-xxxxxxx
#to use Google Analytics 4f
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

### Universal Analytics and Google Analytics 4

Google will deprecate Universal Analytics on July 1, 2023, in favor of Google Analytics 4.
Unitl that date, you could use Universal Analytics and Google Analytics 4 simultaneously, simply adding both
RAZZLE_GA_CODE
and
RAZZLE_GA4_CODE
in your .env.
