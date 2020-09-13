import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from '../../constants';
import getLanguage from '../../utils/getCurrentLanguage';

import {
  LangSelectorContainer,
  SelectedLang,
  Dropdown,
} from './language-selector.styles';

const LanguageSelector = () => {
  const [opened, setOpened] = useState(false);

  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = getLanguage(i18n);

  return (
    <LangSelectorContainer onClick={() => setOpened(!opened)}>
      <SelectedLang>{currentLanguage}</SelectedLang>
      {opened && (
        <Dropdown>
          {Object.entries(AVAILABLE_LANGUAGES).map(([lang, { name }]) => {
            if (currentLanguage === lang) return undefined;

            return (
              <div key={lang} onClick={() => changeLanguage(lang)}>
                {name}
              </div>
            );
          })}
        </Dropdown>
      )}
    </LangSelectorContainer>
  );
};

export default LanguageSelector;
