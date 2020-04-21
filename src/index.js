import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

const trackingCode = process.env.RAZZLE_GA_CODE

if (__CLIENT__ && trackingCode) {
  ReactGA.initialize(trackingCode, {
    debug: __DEVELOPMENT__ ?? false,
    gaOptions: {
      anonymizeIp: true,
    },
  })
}

const useGoogleAnalytics = () => {
  let location = useLocation()

  useEffect(() => {
    ReactGA.pageview(location.pathname)
  }, [location])
}

export { useGoogleAnalytics }
