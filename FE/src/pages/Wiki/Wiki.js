import { Link } from "react-router-dom"


export default function Wiki() {

    return (
        <div className="wiki">

            <Link to="email">Email</Link>
            <Link to="3rd-party">3rd Party</Link>
            <Link to="filesandfolders">Files and Folders</Link>
            <Link to="network">Network</Link>
            <Link to="pcissues">PC Issues</Link>
            <Link to="printers">Printers</Link>
            <Link to="servers">Servers</Link>
            <Link to="signinissues">"Sign In" Issues</Link>

        </div>
    )
}