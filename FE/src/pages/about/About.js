import { useState } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { t } from "i18next";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function About() {
    return (
        <div className="about">
            <h3>{t("About")}</h3>
            <h2>{t("About Title")}</h2>
            <h2>{t("About body")}</h2>
            <div className="about-details">
                <p>{t("About desc")}</p>
            </div>
<CardGroup>
                <Card>
                <Card.Body>{t("maintenance")}</Card.Body>
                </Card>
                <Card>
                <Card.Body>{t("Networks")}</Card.Body>
                </Card>
                <Card>
                <Card.Body>{t("Infosec")}</Card.Body>
                </Card>
                <Card>
                <Card.Body>{t("techsupport")}</Card.Body>
                </Card>
</CardGroup>


            <nav>
                <NavLink to="services">{t("services")}</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}