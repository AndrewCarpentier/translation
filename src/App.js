import styles from './App.module.scss';
import i18n from 'i18next';
import { Suspense } from 'react';
import {Trans, useTranslation} from 'react-i18next';
import './i18n';
import Homepage from './Homepage';



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

          <Homepage></Homepage>
      </div>
    </Suspense>
    
  );
}

export default App;
