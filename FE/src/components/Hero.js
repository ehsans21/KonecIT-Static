
import { t } from "i18next";



export default function Hero(props) {
    return (
        <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg} />

            <div className="hero-text">
                <h1>{t("Welcome")}</h1>
                <p>{t("Body")}</p>
            </div>
        </div>

    )
}