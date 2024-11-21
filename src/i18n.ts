import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import sidePaeren from "./translate/sidepar/sideparen.json";
import sidePartr from "./translate/sidepar/sidpartr.json";
import navbaren from "./translate/Navbar/navbaren.json";
import navbartr from "./translate/Navbar/navbartr.json";
import chartsen from "./translate/charts/chartsen.json";
import chartstr from "./translate/charts/chartstr.json";
import dashboardmain from "./translate/dashboardMain/dashboardmainen.json";
import dashboardmaintr from "./translate/dashboardMain/dashboardtr.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: false
    },
    resources: {
      en: {
        translation: {
            ...sidePaeren,
            ...navbaren,
            ...chartsen,
            ...dashboardmain

         
        }
      },
      tr: {
        translation: {
            ...sidePartr,
            ...navbartr,
            ...chartstr,
            ...dashboardmaintr
        
        }
      } 
    }
  });

export default i18n;
