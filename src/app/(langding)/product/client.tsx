'use client';
import React from 'react';
import { Button } from 'antd';
import { useTranslation, changeLanguage } from '@src/i18n/client'

const Client = () => {
  const { t, i18n } = useTranslation('common');
  // Client-side buttons
  const handleClientLanguageChangeEn = () => {
    changeLanguage('en');
  };
  const handleClientLanguageChangeVn = () => {
    changeLanguage('vn');
  };
  return (
    <div style={{ margin: 10 }}>
      {t("hello")}
      Client
      <div>
        <Button onClick={handleClientLanguageChangeEn}>Change Client EN</Button>
        <Button onClick={handleClientLanguageChangeVn}>Change Client VN</Button>
      </div>
    </div>

  )
}

export default Client