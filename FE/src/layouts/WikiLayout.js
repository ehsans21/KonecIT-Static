import { Link, Outlet } from 'react-router-dom';

export default function WikiLayout() {
    return (
        <div className='wiki-layout'>

            <h2>KonecIT Wiki</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis lacus eget gravida accumsan. Interdum</p>


            <Outlet />

        </div>

    );
}

