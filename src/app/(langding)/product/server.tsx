"use server";
import React from 'react';
import { useTranslation } from '@root/src/i18n/server';
import TestClient from './testClient';
const Server = async () => {
  const { t } = await useTranslation('common');

  return (
    <div style={{ marginTop: 200 }}>
      <h1>{t('hello')}</h1>
      Server
      <div>
        {/* Pass switchLanguage as a prop to the client-side component */}
        <TestClient />
      </div>
    </div>
  );
};

export default Server;