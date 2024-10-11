
import NextTopLoader from "nextjs-toploader";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import ReduxProvider from "@/app/provider";
import '@/app/globals.css'
import Header from "@/components/Header/Header";
import BlueLine from "@/components/Pages/Home/BlueLIne";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "SVP",
    template: "%s | SVP",
  },
  description: "SVP",
  icons: {
    icon: '/logo.svg',
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className=''>
        <NextTopLoader
          color="#76bbed"
          height={2}
          crawl={true}
          showSpinner={false}
          zIndex={1600}
          showAtBottom={false}
        />
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <Header />
            {children}
            <Footer/>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
