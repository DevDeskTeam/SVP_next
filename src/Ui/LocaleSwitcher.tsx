"use client";
import {useLocale, useTranslations} from "next-intl";
import {locales, Locale} from '@/config';
import {usePathname, useRouter} from "@/navigation";
import {useParams} from "next/navigation";

export default function LocaleSwitcher(){
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams() as Record<string, string>;


    const switchLocale = (nextLocale: Locale) => {
        // @ts-ignore
        router.replace({pathname,params}, {locale: nextLocale});
    };

    return(
        <>
            <ul  style={{gap:10}} className=" flex flex-row gap-[10px] text-sm items-center">
                {locales.map((loc) => (
                    <li
                        key={loc}
                        className={`cursor-pointer ${loc === locale ? 'hidden' : 'flex'}`}
                        onClick={() => switchLocale(loc)}
                    >
                        {t('locale', {locale: loc})}
                    </li>
                ))}
            </ul>
        </>
    )
}
