import Link from "next/link";
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../i18n.json";
import { useEffect } from "react";

const { locales } = i18nConfig;

function ChangeLanguage() {
    const { locale, defaultLocale, pathname } = useRouter()
    const { t, lang } = useTranslation();

    useEffect(() => {
        // console.log("in changelanguage")
        persistLocaleCookie
    }, [locale, defaultLocale])

    function persistLocaleCookie() {
        if (locale !== defaultLocale) {
            const date = new Date()
            const expireMs = 100 * 24 * 60 * 60 * 1000 // 100 days
            date.setTime(date.getTime() + expireMs)
            document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`
        }
    }

    return locales.map((lng) => {
        if (lng === lang) return null;

        return (
            <Link href={pathname} locale={lng} key={lng}>
                {t(`layout:language-name-${lng}`)}
            </Link>
        );
    });
}

const Sidebar = () => {
    const { t } = useTranslation("layout");
    return (
        <div className="sidebar">
            <p>Sidebar</p>
            <Link href="/">{t("menu.home")}</Link>
            <Link href="/menu">{t("menu.menu")}</Link>
            <Link href="/about">{t("menu.about")}</Link>
            <Link href="/animate">{t("menu.animate")}</Link>
            {ChangeLanguage()}
        </div>
    );
};

export default Sidebar;
