import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { t } from "i18next";
import LanguageSwitcher from "../components/Langswitch";
import NavBar from "../components/navbar";

export default function RootLayout() {
    const currentYear = new Date().getFullYear();



    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <h1>KonecIT</h1>
                    <NavBar />
                    <LanguageSwitcher />
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