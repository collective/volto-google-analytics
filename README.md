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

### GDPL

If your portal needs to follow GDPL, you can pass a parameter to the `useGoogleAnalytics` hook telling it whether or not we can create a cookie. If `false` is passed, GA will not be initialized, causing the cookie not to be created. The page view will also not be counted. If `true` is passed and GA has not been initialized, it will be initialized and the cookie will be written. If the parameter is not passed, `true` will be assumed.

Also, you could passing down some `options`. For example, if you want to inizialize GA without profiling cookie (\_ga,\_gid, \_gat), you could pass this options: `{ storage: 'none',     clientId: Date.now()}`.

Example:

```jsx
import { useGoogleAnalytics } from 'volto-google-analytics'

const Footer = ({cookieAllowed}) => {


  const options = {
    storage: 'none',        // no profiling cookie
    clientId: Date.now(),   // temp clientId
  };

  useGoogleAnalytics(cookieAllowed, options);

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
