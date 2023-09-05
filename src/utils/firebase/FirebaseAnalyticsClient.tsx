// need other events?
// https://developers.google.com/gtagjs/reference/event
import {logEvent, setUserId,} from 'firebase/analytics';
import FirebaseClient from './FirebaseClient';
import {v4 as uuidv4} from 'uuid'

const analyticsPageView = (pathname: string, search: string, title: string) => {
  if (FirebaseClient.analytics) {
    logEvent(FirebaseClient.analytics, 'page_view', {
      page_path: pathname + search,
      page_title: title,
    });
  } else {
    // console.error('This better be an automated test');
  }
};

const utils = {
  logEventWithData: (eventName: string, data: any) => {
    logEvent(FirebaseClient.analytics, eventName, data);
  },
};

const ctaClick = (location: string, ctaText: string, userId?: string, ) => {
  utils.logEventWithData('cta_click', {
    userId:userId??uuidv4(),
    location,
    ctaText
  });
}

const setAppUserId = (userId: string) => {
  setUserId(FirebaseClient.analytics, userId);
};

const reportVital = (vitalName: string, vitalMetric: string) => {
  utils.logEventWithData('web_vital_report', {
    name: vitalName,
    metric: vitalMetric,
  });
};

const amenityTooltipShown = (serviceName:string, amenityName: string, analyticsId:string) =>{
  utils.logEventWithData('amenityTooltipShown', {
    analyticsId,
    serviceName,
    amenityName
  });
}
const qrCodeShown = (qrCodeValue:string, analyticsId:string) =>{
  utils.logEventWithData('qr_code_shown', {
    analyticsId,
    qrCodeValue,
  });
}

const utmCodes = (source:string, medium:string, campaign:string, id:string) =>{
  utils.logEventWithData('utm_codes_received', {
    source,
    medium,
    campaign,
    id
  });
}

const albumImageClick = ( imageName: string, imageCaption: string, analyticsId:string) =>{
  utils.logEventWithData('album_image_clicked', {
    analyticsId,
    imageName,
    imageCaption
  });
}

export default {
  analyticsPageView,
  ctaClick,
  reportVital,
  setAppUserId,
  amenityTooltipShown,
  qrCodeShown,
  utmCodes,
  albumImageClick
};
