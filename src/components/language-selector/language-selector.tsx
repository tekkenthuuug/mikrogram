import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from '../../constants';

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

  const currentLanguage = i18n.language;

  return (
    <LangSelectorContainer onClick={() => setOpened(!opened)}>
      <SelectedLang>{currentLanguage}</SelectedLang>
      {opened && (
        <Dropdown>
          {AVAILABLE_LANGUAGES.map(langObj => {
            if (currentLanguage === langObj.lang) return undefined;

            return (
              <div
                key={langObj.lang}
                onClick={() => changeLanguage(langObj.lang)}
              >
                {langObj.name}
              </div>
            );
          })}
        </Dropdown>
      )}
    </LangSelectorContainer>
  );
};

export default LanguageSelector;
