import { useLoaderData, useParams } from "react-router-dom";

function CareersDetails() {
    const { id } = useParams()
    const career = useLoaderData()

    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Aliqua exercitation culpa nulla excepteur Lorem aute consectetur amet aliqua ea.
                    Amet ex cillum fugiat ipsum est dolore irure est exercitation elit sit ex qui.
                    Nisi excepteur culpa aute labore id pariatur exercitation. Velit cupidatat fugiat consequat nisi ea.
                    Dolore ut nisi tempor cillum consectetur ex minim dolor laborum incididunt ullamco dolore velit irure.</p>
            </div>
        </div>
    )
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/careers/' + id)

    if (!res.ok) {
        throw Error("Could not find that career")
    }
    
    return res.json()
}


export default CareersDetails