import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function Home() {
    return (
        <div className="home">
            <h2>{t("Welcome")}</h2>
            <p>{t("Body")}</p>
        </div>
    );
}