import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <section>
        <h1>{t('title')}</h1>
      
      </section>
    </>
  );
}
