import { useLoaderData, Link } from "react-router-dom";
import data from "./Data.json"

export default function Careers() {
    const careers = useLoaderData()
    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

// loader function
export const careersLoader = async () => {
    const res = await fetch(data)

    if (!res.ok) {
        throw Error("Could not fetch the careers")
    }

    return res.json()
}