import {Pathnames} from 'next-intl/routing';

export const locales = ['en', 'az', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const pathnames = {
    '/': '/',
    '/transportation': {
        en: '/transportation',
        az: '/nəqliyyat',
        ru: '/транспорт'
    },
    '/warehouse': {
        en: '/warehouse',
        az: '/anbar',
        ru: '/склад'
    },
    '/cargo': {
        en: '/cargo',
        az: '/karqo',
        ru: '/груз'
    },
    '/customerbroker': {
        en: '/customerbroker',
        az: '/müştəribrokeri',
        ru: '/клиентброкер'
    },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = 'always';

export type AppPathnames = keyof typeof pathnames;