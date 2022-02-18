import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import config from '@plone/volto/registry';

const cookieExpires =
  config.settings?.['volto-google-analytics']?.cookieExpires ??
  6 * 30 * 24 * 60 * 60; // in seconds. Default: 6 month

if (__CLIENT__) {
  const trackingCode =  window?.env?.RAZZLE_GA_CODE || process.env.RAZZLE_GA_CODE;
  if(trackingCode){
    ReactGA.initialize(trackingCode, {
      debug: __DEVELOPMENT__ ?? false,
      gaOptions: {
        anonymizeIp: true,
        cookieExpires: cookieExpires,
      },
    });
  }
}

const useGoogleAnalytics = () => {
  let location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);
};

export { useGoogleAnalytics };

export default (config) => config;
