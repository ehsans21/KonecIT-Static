import Dropdown from 'react-bootstrap/Dropdown';

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
    const { t, i18n } = useTranslation();
  return (

<Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">Language</Dropdown.Toggle>

<Dropdown.Menu>
    <Dropdown.Item onClick={() => i18n.changeLanguage('ar')}>العربية</Dropdown.Item>
    <Dropdown.Item onClick={() => i18n.changeLanguage('en')}>English</Dropdown.Item>
    <Dropdown.Item onClick={() => i18n.changeLanguage('he')}>עברית</Dropdown.Item>
</Dropdown.Menu>


{/* <Dropdown.Menu>
    <Dropdown.Item as="button"><button onClick={() => {
        i18n.changeLanguage('ar');
    }}>AR</button></Dropdown.Item>
    <Dropdown.Item as="button"><button onClick={() => {
        i18n.changeLanguage('en');
    }}>EN</button></Dropdown.Item>
    <Dropdown.Item as="button"><button onClick={() => {
        i18n.changeLanguage('he');
    }}>HE</button></Dropdown.Item>
</Dropdown.Menu> */}
</Dropdown>
  );
}

