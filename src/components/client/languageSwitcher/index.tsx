'use client'
import { useTranslation, changeLanguage } from '@src/i18n/client';
import { Image } from 'antd'
function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (language) => {
    changeLanguage(language);
  };
  const languageOptions = [
    { value: 'en', label: 'EN', flag: '/images/flag/en.png' },
    { value: 'vn', label: 'VN', flag: '/images/flag/vn.png' },
    // Add more language options as needed
  ];
  return (
    <div>

      <select
        value={i18n.language}
        onChange={(e) => changeLanguageHandler(e.target.value)}
        style={{ padding: '5px', borderRadius: '5px' }}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSwitcher;