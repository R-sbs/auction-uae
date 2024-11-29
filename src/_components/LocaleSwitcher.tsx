import { useLocale, useTranslations } from "next-intl";
import LanguageSelector  from "./LanguageSelector";
import { locales } from "@/config";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");

  const locale = useLocale();

  return (
    <LanguageSelector defaultValue={locale} label={t("label")}>
      {locales.map((current) => (
        <option key={current} value={current}>
          {t("locale", { locale: current })}
        </option>
      ))}
    </LanguageSelector>
  );
}
