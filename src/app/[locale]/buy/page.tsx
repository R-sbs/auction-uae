import React from "react";
import { useTranslations } from "next-intl";


const buyPage = () => {
    const t = useTranslations('buy');
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
      {" "}
      <p className="text-3xl text-center text-black">{t('title')}</p>
      
    </div>
    </main>
  );
};

export default buyPage;
