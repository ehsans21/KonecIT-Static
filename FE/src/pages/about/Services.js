import { t } from "i18next";

export default function Services() {
    return (
        <div className="services">
                <h3>{t("services_title")}</h3>

                <div className="serdesc">
                    <p>{t("services_desc")}</p>
                </div>

                <div className="serdesc">
                    <p>{t("howto_workwithus")}</p>
                </div>

                <div className="serdesc">
                    <p>{t("howto_workwithus_steps")}</p>
                </div>

                <div className="serdesc">
                    <p>{t("req_service")}</p>
                </div>

                <div className="serdesc">
                    <p>{t("req_service_desc")}</p>
                </div>

                <div className="serdesc">
                    <p>{t("contract_negotiation")}</p>
                </div>

                <div className="serdesc">
                    <p>{t("contract_negotiation_desc")}</p>

                </div>

                <div className="serdesc">
                    <p>{t("start_services")}</p>

                </div>

                <div className="serdesc">
                    <p>{t("start_services_desc")}</p>
                </div>
        </div>
    );
}
