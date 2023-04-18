import styles from './App.module.scss';
import i18n from 'i18next';
import { Suspense } from 'react';
import {Trans, initReactI18next, useTranslation} from 'react-i18next';

const translationEn = {
  welcome: "welcome",
  sample: "Sample <bold><italics>text</italics></bold>"
}
const translationFr = {
  welcome: "bienvenue",
  sample: "Exemple de <bold><italics>texte</italics></bold>"
}

i18n
.use(initReactI18next)
.init({
  resources : {
    en: {
      translation : translationEn
    },
    fr: {
      translation : translationFr
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {escapeValue: false}
})

function App(){
  const {t} = useTranslation();

  const onChange = (event)=>{
    console.log(event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Suspense fallback="Loading...">
      <div className={`d-flex flex-column ${styles.appContainer}`}>
          <h1>{t("welcome")}</h1>
          <Trans components={{bold: <strong/>, italics: <i/>}}>sample</Trans>
          <select name="language" onChange={onChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
      </div>
    </Suspense>
    
  );
}

export default App;
