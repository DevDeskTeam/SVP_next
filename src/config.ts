import {Pathnames} from 'next-intl/routing';

export const locales = ['en', 'az', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const pathnames = {
    '/': '/',
    '/about': {
        en: '/about',
        az: '/haqqimizda',
        ru: '/onas'
    },
    '/services': {
        en: '/services',
        az: '/xidmetler',
        ru: '/uslugi'
    },
    '/contact': {
        en: '/contact',
        az: '/elaqe',
        ru: '/kontakt'
    },
    '/career': {
        en: '/career',
        az: '/karyera',
        ru: '/karyera'
    },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = 'always';

export type AppPathnames = keyof typeof pathnames;