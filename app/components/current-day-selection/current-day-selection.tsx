import { DAY, IN_CYCLE } from "@/app/lib/constant";
import { useTranslations } from "next-intl";

export default function CurruentDaySelection() {
  const t = useTranslations("curruentdayselection");
  return (
    <div className="flex gap-3">
      <span>{t(DAY)}</span>
      <div className="flex gap-2">
        <span>/</span>
        <span>61</span>
      </div>
      <span>{t(IN_CYCLE)}</span>
    </div>
  );
}
