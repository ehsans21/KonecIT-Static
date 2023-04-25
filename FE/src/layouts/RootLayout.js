import { NavLink, Outlet } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown"
import Breadcrumbs from "../components/Breadcrumbs";
import { useTranslation } from "react-i18next";

export default function RootLayout() {
    const currentYear = new Date().getFullYear();
    const { t, i18n } = useTranslation();


    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <h1>KonecIT</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>

                        {i18n.language == 'en' && <button onClick={() => {
                            i18n.changeLanguage('ar');
                        }}>AR</button>}
                        {i18n.language == 'en' && <button onClick={() => {
                            i18n.changeLanguage('he');
                        }}>HE</button>}
                        {i18n.language == 'he' && <button onClick={() => {
                            i18n.changeLanguage('en');
                        }}>EN</button>}
                        {i18n.language == 'he' && <button onClick={() => {
                            i18n.changeLanguage('ar');
                        }}>AR</button>}
                        {i18n.language == 'ar' && <button onClick={() => {
                            i18n.changeLanguage('en');
                        }}>EN</button>}
                        {i18n.language == 'ar' && <button onClick={() => {
                            i18n.changeLanguage('he');
                        }}>HE</button>}

                </nav>

                <Breadcrumbs />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Copyright © Ehsan Shlewett {currentYear}</p>
            </footer>
        </div>
    );
}