import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { default as ReactGA4 } from 'react-ga4';
import config from '@plone/volto/registry';

const cookieExpires =
  config.settings?.['volto-google-analytics']?.cookieExpires ??
  6 * 30 * 24 * 60 * 60; // in seconds. Default: 6 month

const initializeGA = () => {
  if (__CLIENT__) {
    const UA_trackingCode =
      window?.env?.RAZZLE_GA_CODE || process.env.RAZZLE_GA_CODE;
    if (UA_trackingCode) {
      ReactGA.initialize(UA_trackingCode, {
        debug: __DEVELOPMENT__ ?? false,
        gaOptions: {
          anonymizeIp: true,
          cookieExpires: cookieExpires,
        },
      });
    }

    const GA4_trackingCode =
      window?.env?.RAZZLE_GA4_CODE || process.env.RAZZLE_GA4_CODE;
    if (GA4_trackingCode) {
      ReactGA4.initialize([
        {
          testMode: __DEVELOPMENT__ ?? false,
          trackingId: GA4_trackingCode,
          gaOptions: {
            anonymizeIp: true,
            cookieExpires: cookieExpires,
          },
        },
      ]);
    }
  }
};

const isGAInitialized = () => {
  if (__CLIENT__) {
    return ReactGA4.isInitialized;
  }
};

const useGoogleAnalytics = (cookieAllowed = true) => {
  let location = useLocation();

  useEffect(() => {
    if (!cookieAllowed) {
      return;
    }
    if (!isGAInitialized()) {
      initializeGA();
    }
    const UA_trackingCode =
      window?.env?.RAZZLE_GA_CODE || process.env.RAZZLE_GA_CODE;
    const GA4_trackingCode =
      window?.env?.RAZZLE_GA4_CODE || process.env.RAZZLE_GA4_CODE;

    if (UA_trackingCode) {
      ReactGA.pageview(location.pathname);
    }
    if (GA4_trackingCode) {
      ReactGA4.send({ hitType: 'pageview', page: location.pathname });
    }
  }, [location, cookieAllowed]);
};

const exportDefault = (config) => config;

export { useGoogleAnalytics };

export default exportDefault;
