/*
consider to NOT remove this component (use it as an implementation-example),  until you will implement any REAL feature, which uses: 
  - translations
  - lodash
  - routing
*/

import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const OtherPage = () => {
  const { i18n } = useTranslation();
  const sampleArray: Array<string> = ['1stt', '2nd', '3rd'];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div style={{ marginTop: '16px' }}>
      <p style={{ fontWeight: 500 }}>{t('OTHER_PAGE.CONTENT')}</p>
      <button type='button' onClick={() => changeLanguage(i18n.language === 'en' ? 'pl' : 'en')}>
        {t('OTHER_PAGE.SWITCH_LANGUAGE.BUTTON')}
      </button>

      <p style={{ marginTop: 50, fontWeight: 500 }}>{t('OTHER_PAGE.LODASH_EXAMPLE.HEADER')}</p>
      <div>{t('OTHER_PAGE.LODASH_EXAMPLE.ARRAY')}:</div>
      <div>{sampleArray.join(', ')}</div>
      <div style={{ marginTop: 20 }}>{t('OTHER_PAGE.LODASH_EXAMPLE.LAST_ELEMENT')}:</div>
      <div>{_.last(sampleArray)}</div>
    </div>
  );
};

export default OtherPage;
